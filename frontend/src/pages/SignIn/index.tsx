import { InputWithBorderBottom } from "../../Components/InputWithBorderBottom";
import { Button } from "../../Components/Button";
import { GlobalStyle, Container, LoginContrainer, LoginWrap,  LoginTitle, 
    TextTitle, Text1, Text2, TextCenter, ForgotPassword, TextSenha} from './styles'
import {useState} from 'react'

export function SignIn(){
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    return (
        <>
        <GlobalStyle />
        <Container>
            <LoginContrainer>
                <LoginWrap>
                    <TextTitle><LoginTitle>Sing In</LoginTitle></TextTitle>
                    <InputWithBorderBottom size="large" type="text" placeholder="Email ou Matricula" onChange={e => setEmail(e.target.value)}/>
                    <TextSenha><ForgotPassword>Esqueceu sua senha?</ForgotPassword></TextSenha>
                    <InputWithBorderBottom size="large" type="password" placeholder="Senha" onChange={e => setSenha(e.target.value)} />
                    <Button size="large" buttonType="accept" title="ENTRAR"/>
                    <TextCenter><Text1>Não possui Conta?</Text1>
                                <Text2>Criar Conta.</Text2></TextCenter>
                </LoginWrap>
            </LoginContrainer>
        </Container>
        </>
    );
}
