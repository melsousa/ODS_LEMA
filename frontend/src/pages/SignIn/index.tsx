import { InputWithBorderBottom } from "../../Components/InputWithBorderBottom";
import { Button } from "../../Components/Button";
import {
    GlobalStyle, Container, LoginContrainer, LoginWrap, Title, RecoveryPass, ButtonContainer, CreateAccount
} from './styles'
import { useAuth } from "../../context/useAuth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function SignIn() {
    const navigate = useNavigate();
    const { signIn } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        if(email && password){
            const isLogged = await signIn(email, password);
            if(isLogged){
                navigate('/user');
            }else {
                alert("Não foi possivel efetuar o Login")
            }
        }
    }

    return (
        <>
            <GlobalStyle />
            <Container>
                <LoginContrainer>
                    <LoginWrap>
                        <Title>Login</Title>

                        <InputWithBorderBottom size="large" type="text" placeholder="Email ou Matricula" onChange={e => setEmail(e.target.value)} />
                        <RecoveryPass>Esqueceu sua senha?</RecoveryPass>
                        <InputWithBorderBottom size="large" type="password" placeholder="Senha" onChange={e => setPassword(e.target.value)} />

                        <ButtonContainer>
                            <Button size="large" buttonType="accept" title="Entrar" onClick={handleLogin} />
                        </ButtonContainer>

                        <CreateAccount onClick={() => navigate('/signup')} >Não tem conta? <span>Criar conta</span></CreateAccount>
                    </LoginWrap>
                </LoginContrainer>
            </Container>
        </>
    );
}