import { Bell, MagnifyingGlass, User, } from "phosphor-react";
import { HeaderContainer, Button, MenuIcon, RedDot, Search, InputContainer, Logo, IconsContainer } from "./styles";
import { useState } from "react";
import { RightNavBar } from "../RightNavBar";
import { NotificationCard } from "../NotificationCard";


export function Header() {
    const [open, setOpen] = useState(false);

    function openMenu() {
        if (open) {
            return (<RightNavBar>
                <NotificationCard userName="Bryan" notification="aceitou sua requisição para impressão 3D na" date="Domingo"></NotificationCard>
                <NotificationCard userName="Bryan" notification="aceitou sua requisição para impressão 3D na" date="Domingo"></NotificationCard>
                <NotificationCard userName="Bryan" notification="aceitou sua requisição para impressão 3D na" date="Domingo"></NotificationCard>
                <NotificationCard userName="Bryan" notification="aceitou sua requisição para impressão 3D na" date="Domingo"></NotificationCard>
                <NotificationCard userName="Bryan" notification="aceitou sua requisição para impressão 3D na" date="Domingo"></NotificationCard>
                <NotificationCard userName="Bryan" notification="aceitou sua requisição para impressão 3D na" date="Domingo"></NotificationCard>
            </RightNavBar>)
        }
    }

    return (
        <HeaderContainer>
            <Logo></Logo>
            <InputContainer>
                <Search
                    placeholder="Pesquisar..."
                    type='text' />
                <MagnifyingGlass size={32} color="#929292" weight="bold" />
            </InputContainer>
            <IconsContainer>
                <Button onClick={() => setOpen(!open)} >
                    <Bell size={32} color="#ffffff" weight="fill" />
                    <RedDot />
                </Button>
                <Button>
                    <User size={32} color="#ffffff" weight="fill" />
                </Button>
                <Button>
                    <MenuIcon />
                </Button>
                <Button></Button>
            </IconsContainer>
            {
                openMenu()
            }

        </HeaderContainer>
    );
}