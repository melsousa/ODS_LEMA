import { Route, Routes } from "react-router-dom";
import { DefaultTheme } from "./layouts/DefaultTheme";
import { AllOrders } from "./pages/AllOrders";
import { Home } from "./pages/Home";
import { SignIn } from "./pages/SignIn";
import {SignUp} from "./pages/SignUp";

export function Router(){
    return(
        <Routes>
            <Route path="/" >
                <Route path="/" element={<Home/>} />
                <Route path="/signin" element={<SignIn/>} />
                <Route path="/signup" element={<SignUp/>} />
            </Route>

            <Route path="/home" >
                <Route  path="/home" element={<DefaultTheme/>} />
                <Route path="/home/allorders" element={<AllOrders/>} />
            </Route>
        </Routes>
    );
}