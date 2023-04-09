import { Outlet } from "react-router-dom";
import { Header } from "../../Components/Header";
import { NavigationBar } from "../../Components/NavigationBar";
import { Container } from "./styles";

export function DefaultTheme() {
    return (
        <Container>
            <Header />
            <NavigationBar/>
            <Outlet/>
        </Container>
        
    )
}