import { SignIn } from "../pages/SignIn";
import { useAuth } from "./useAuth"

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
    const auth = useAuth();

    if(!auth.user && !auth.loading){
        return <SignIn/> ;
    }

    return children;
}