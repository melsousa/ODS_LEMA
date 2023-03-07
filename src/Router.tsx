import { Route, Routes } from "react-router-dom";
import { Start } from "./pages/Start";

export function Router(){
    return(
        <Routes>
            <Route path="/" >
                <Route path="/" element={<Start/>} />
            </Route>
        </Routes>
    );
}