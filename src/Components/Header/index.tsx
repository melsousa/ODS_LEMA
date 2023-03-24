import { Bell, MagnifyingGlass, User, } from "phosphor-react";
import { HeaderContainer, Button, MenuIcon, RedDot, Search, InputContainer, Logo, IconsContainer } from "./styles";


export function Header() {
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
                <Button>
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
        </HeaderContainer>
    );
}