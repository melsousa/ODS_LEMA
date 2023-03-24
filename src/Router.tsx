import { Route, Routes } from "react-router-dom";
import { DefaultTheme } from "./layouts/DefaultTheme";
import { AllOrders } from "./pages/AllOrders";
import { Home } from "./pages/Home";


export function Router(){
    return(
        <Routes>
            <Route path="/" >
                <Route path="/" element={<Home/>} />
            </Route>

            <Route path="/home" >
                <Route  path="/home" element={<DefaultTheme/>} />
                <Route path="/home/allorders" element={<AllOrders/>} />
            </Route>
        </Routes>
    );
}