<<<<<<< HEAD
import { GlobalStyle, Container, LoginContrainer, LoginWrap,  LoginTitle, 
        TextTitle, Input, LoginButton, Text1, Text2, TextCenter, ForgotPassword, TextSenha} from './styles'

=======
import { InputWithBorderBottom } from "../../Components/InputWithBorderBottom";
import { Button } from "../../Components/Button";
import { GlobalStyle, Container, LoginContrainer, LoginWrap,  LoginTitle, 
    TextTitle, Text1, Text2, TextCenter, ForgotPassword, TextSenha} from './styles'
>>>>>>> e6d5cf6db8df745d17125bbb01a5d9e653101123
export function SignIn(){
    return (
        <>
        <GlobalStyle />
        <Container>
            <LoginContrainer>
                <LoginWrap>
                    <TextTitle><LoginTitle>Sing In</LoginTitle></TextTitle>
<<<<<<< HEAD
=======
                    <InputWithBorderBottom size="large" type="text" placeholder="Email ou Matricula" />
                    <TextSenha><ForgotPassword>Esqueceu sua senha?</ForgotPassword></TextSenha>
                    <InputWithBorderBottom size="large" type="password" placeholder="Senha" />
                    <Button size="large" buttonType="accept" title="ENTRAR"/>
                    <TextCenter><Text1>Não possui Conta?</Text1>
                                <Text2>Criar Conta.</Text2></TextCenter>
                </LoginWrap>
            </LoginContrainer>
        </Container>
        </>
    );
}

{/* <GlobalStyle />
        <Container>
            <LoginContrainer>
                <LoginWrap>
                    <TextTitle><LoginTitle>Sing In</LoginTitle></TextTitle>
>>>>>>> e6d5cf6db8df745d17125bbb01a5d9e653101123
                    <Input type="text" placeholder="Email ou Matricula" />
                    <TextSenha><ForgotPassword>Esqueceu sua senha?</ForgotPassword></TextSenha> 
                    <Input type="password" placeholder="Senha" />
                    <LoginButton>Entrar</LoginButton>
                    <TextCenter><Text1>Não possui Conta?</Text1>
                                <Text2>Criar Conta.</Text2></TextCenter>   
                </LoginWrap>
            </LoginContrainer>
<<<<<<< HEAD
        </Container>  
        </>
    );
}
=======
        </Container>   */}
>>>>>>> e6d5cf6db8df745d17125bbb01a5d9e653101123
