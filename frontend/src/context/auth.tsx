import { ReactNode, createContext, useEffect, useState } from "react";
import Api from "../Api";

interface contextProvider {
    children?: ReactNode
}

interface User {
    id: number
    name: string
    email: string
    password?: string
}

interface contextData {
    user: User | null
    loading: boolean
    signIn: (email: string, password: string) => Promise<boolean>
    signUp: (name: string, email: string, password: string, cargo: number) => void
    signOut: () => void
}

export const AuthContext = createContext<contextData>({} as contextData);

export const AuthProvider = ({ children }: contextProvider) => {

    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const validateToken = async () => {
            const storageData = localStorage.getItem('authToken');
            if (storageData) {
                try {
                    const response = await Api.get("profile", {
                        headers: {
                            authorization: `Bearer ${storageData}`
                        }
                    });
                    if (response.data) {
                        setUser(response.data);
                        console.log(user);
                    }
                } catch (error) {
                    console.error("Erro ao obter perfil:", error);
                } finally {
                    setLoading(false);
                }
            } else {
                setLoading(false);
            }
        };
        validateToken();
    }, []);

    const signIn = async (email: string, password: string) => {
        const data = await Api.post("login", {
            email: email,
            senha: password
        })

        if (data.data.user && data.data.token) {
            setUser(data.data.user)
            setToken(data.data.token);
            return true;
        }

        return false;
    }

    function signUp(name: string, email: string, password: string, cargo: number) {
        Api.post("usuario", {
            nome: name,
            email: email,
            senha: password,
            id_cargo: cargo
        }).then(response => {
            console.log(response)
        }).catch((error) => {
            console.log(error)
        })
    }

    const setToken = (token: string) => {
        localStorage.setItem('authToken', token);
    }

    const signOut = () => {
        setUser(null);
        setToken('');
    }

    return (
        <AuthContext.Provider value={{ user, loading, signIn, signUp, signOut }} >
            {
                children
            }
        </AuthContext.Provider>
    )
}