import { Button, ButtonContainer, Container, LogoContainer } from "./styles";

export function Header() {
    return (
        <Container>
            <LogoContainer>
                LOGO
            </LogoContainer>
            
            <ButtonContainer>
                <Button>Inicio</Button>
                <Button>Agendar</Button>
                <Button>Entrar</Button>
                <Button>Cadastrar</Button>
            </ButtonContainer>
        </Container>
    );
}