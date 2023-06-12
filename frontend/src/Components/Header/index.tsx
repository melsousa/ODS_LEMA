import { Bell, CaretDown, MagnifyingGlass, Plus, User, } from "phosphor-react";
import { HeaderContainer, Button, RedDot, Search, InputContainer, Logo, IconsContainer, MenuTitle, PerfilContainer, NewOrderButton } from "./styles";
import { useState } from "react";
import { RightNavBar } from "../RightNavBar";
import { NotificationCard } from "../NotificationCard";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
    route: "user" | "non-user" | "admin"
}

interface ComponentProps {
    name: string;
}

export function Header({ route }: HeaderProps) {
    const [selectedComponent, setSelectedComponent] = useState<string>('A');

    const handleButtonClick = (component: string) => {
        setSelectedComponent(component);
        setOpenMenu(!openMenu)

    };

    const [openMenu, setOpenMenu] = useState(false);
    const navigate = useNavigate();

    const renderComponent = () => {
        switch (selectedComponent) {
            case 'A':
                return (
                    openMenu ? (<RightNavBar>
                        <MenuTitle>Menu</MenuTitle>
                    </RightNavBar>) : (<div style={{ height: 0, width: 0 }} ></div>)
                );
            case 'B':
                return (
                    openMenu ? (
                        <RightNavBar>
                            <MenuTitle>Notificações</MenuTitle>
                            <NotificationCard date="Domingo" notification="aceitou sua requisição para impressão 3D na" userName="Luan" ></NotificationCard>
                            <NotificationCard date="Domingo" notification="aceitou sua requisição para impressão 3D na" userName="Luan" ></NotificationCard>
                            <NotificationCard date="Domingo" notification="aceitou sua requisição para impressão 3D na" userName="Luan" ></NotificationCard>
                            <NotificationCard date="Domingo" notification="aceitou sua requisição para impressão 3D na" userName="Luan" ></NotificationCard>
                            <NotificationCard date="Domingo" notification="aceitou sua requisição para impressão 3D na" userName="Luan" ></NotificationCard>
                        </RightNavBar>
                    ) : (<div style={{ height: 0, width: 0 }} ></div>)
                );
            case 'C':
                return (
                    openMenu ? (<RightNavBar>
                        <MenuTitle>Perfil</MenuTitle>
                    </RightNavBar>) : (<div style={{ height: 0, width: 0 }} ></div>)
                );
        }
    };

    return (
        <HeaderContainer>
            <Logo></Logo>

            {
                route === "user" ? (
                    <IconsContainer>
                        <>
                        <NewOrderButton onClick={() => navigate('/user/createorder')} >
                            <Plus size={16} weight="bold" className="Icon" />
                            Nova Impressão
                        </NewOrderButton>
                            <Button

                                onClick={() => handleButtonClick('B')}
                            >
                                <Bell size={22} color="#ffffff" weight="fill" />
                                <RedDot />
                            </Button>
                            <PerfilContainer onClick={() => handleButtonClick('C')} >
                                <Button>
                                    <User size={22} color="#ffffff" weight="fill" />
                                </Button>
                                {openMenu ? (<CaretDown size={16} color="#ffffff" weight="bold" style={{rotate:'180deg', transition: '300ms'}} />):(<CaretDown size={16} color="#ffffff" weight="bold" style={{transition: '300ms'}} />)}
                            </PerfilContainer>
                            {renderComponent()}
                        </>
                    </IconsContainer>
                ) : (
                    route === "admin" ? (
                        <IconsContainer>
                            <Button>

                            </Button>
                            <Button >
                                <Bell size={32} color="#ffffff" weight="fill" />
                                <RedDot />
                            </Button>
                            <Button>
                                <User size={32} color="#ffffff" weight="fill" />
                            </Button>

                        </IconsContainer>
                    ) : (
                        <IconsContainer>
                            <Button></Button>
                            <Button>
                                <User size={32} color="#ffffff" weight="fill" />
                            </Button>
                        </IconsContainer>
                    ))
            }

        </HeaderContainer>
    );
}