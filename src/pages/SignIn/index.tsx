import { GlobalStyle, Container, LoginContrainer, LoginWrap,  LoginTitle, TextTitle, Input, LoginButton, Text1, Text2, TextCenter, ForgotPassword, TextSenha} from './styles'
export function SignIn(){
    return (
        <>
        <GlobalStyle />
        <Container>
            <LoginContrainer>
                <LoginWrap>
                    <TextTitle><LoginTitle>Login</LoginTitle></TextTitle>
                    <Input type="text" placeholder="Email ou Matricula" />
                    <TextSenha><ForgotPassword>Esqueceu sua senha?</ForgotPassword></TextSenha> 
                    <Input type="password" placeholder="Senha" />
                    <LoginButton>Entrar</LoginButton>
                    <TextCenter><Text1>Não possui Conta?</Text1>
                                <Text2>Criar Conta.</Text2></TextCenter>   
                </LoginWrap>
            </LoginContrainer>
        </Container>  
        </>
    );
}