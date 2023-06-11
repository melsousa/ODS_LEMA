import { Outlet, useNavigate } from "react-router-dom";
import { Header } from "../../Components/Header";
import { NavigationBar } from "../../Components/NavigationBar";
import { Button, ButtonContainer, Container, InputContainer, Search } from "./styles";
import { useState } from "react";
import { MagnifyingGlass } from "phosphor-react";

interface ButtonInfo {
    text: string;
    color: 'background-blue-light' | 'background-green-light' | 'background-red-light' | 'background-yellow-light' | 'background-gray-light' | 'transparent';
}

export function NonUserTheme() {

    const navigate = useNavigate();

    const buttonsInfo: ButtonInfo[] = [
        { text: 'Em produção', color: 'background-blue-light' },
        { text: 'Em Análise', color: 'background-yellow-light' },
        { text: 'Aprovados', color: 'background-green-light' },
        { text: 'Rejeitados', color: 'background-red-light' },
        { text: 'Todos os pedidos', color: 'background-gray-light' },
    ];

    const [selectedButtonIndex, setSelectedButtonIndex] = useState<number>(0);

    const handleButtonClick = (index: number) => {
        setSelectedButtonIndex(index);
        if (index === 0) {
            navigate("/non-user/production")
        } else {
            if (index === 1) {
                navigate("/non-user/analysis")
            } else {
                if (index === 2) {
                    navigate("/non-user/accepted")
                } else {
                    if (index === 3) {
                        navigate("/non-user/rejected")
                    } else {
                        if (index === 4) {
                            navigate("/non-user/allorders")
                        }
                    }
                }
            }
        }
    };
    return (
        <Container>
            <Header route="non-user" />
            <NavigationBar>
                <>
                    <ButtonContainer>
                        {buttonsInfo.map((buttonInfo, index) => (
                            <Button
                                key={index}
                                selected={selectedButtonIndex === index}
                                onClick={() => handleButtonClick(index)}
                            >
                                {buttonInfo.text}
                            </Button>
                        ))}
                    </ButtonContainer>
                    <InputContainer>
                        <Search
                            placeholder="Pesquisar..."
                        />
                        <MagnifyingGlass size={24} color="#929292" weight="bold" />
                    </InputContainer>
                </>
            </NavigationBar>
            <Outlet />
        </Container>

    )
}