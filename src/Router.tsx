import { Route, Routes } from "react-router-dom";
import { DefaultTheme } from "./layouts/DefaultTheme";
import { AllOrders } from "./pages/AllOrders";
import { Home } from "./pages/Home";
import { SignIn } from "./pages/SignIn";
import {SignUp} from "./pages/SignUp";
import {Solitacoes} from "./pages/Solitacoes";

export function Router(){
    return(
        <Routes>
            <Route path="/" >
                <Route path="/" element={<Home/>} />
                <Route path="/signin" element={<SignIn/>} />
                <Route path="/signup" element={<SignUp/>} />
                <Route path="/solitacoes" element={<Solitacoes/>} />
            </Route>

            <Route path="/home" element={<DefaultTheme/>} >
                <Route path="/home/allorders" element={<AllOrders/>} />
            </Route>
        </Routes>
    );
}