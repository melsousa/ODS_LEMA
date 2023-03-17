import { Route, Routes } from "react-router-dom";
import { Start } from "./pages/Start";
import { SignIn } from "./pages/SignIn";
import {SignUp} from "./pages/SingUp";

export function Router(){
    return(
        <Routes>
            <Route path="/" >
                <Route path="/" element={<Start/>} />
                <Route path="/signin" element={<SignIn/>} />
                <Route path="/signup" element={<SignUp/>} />
            </Route>
        </Routes>
    );
}