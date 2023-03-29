import { useState } from 'react'
import { GlobalStyle, 
    Container,
    LoginContrainer, 
    LoginWrap, 
    LoginTitle, 
    Input, TextTitle,
    ButtonDrpDwon, 
    LoginButton} from './styles'

export function SignUp(){
    // const [nome, setNome] = useState('');
    // const [email, setEmail] = useState('');
    // const [matricula, setMatrícula] = useState('');
    // const [opcao, setOpcao] = useState('opcao1');
    // const [senha, setSenha] = useState('');

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     console.log("Formulario enviado!");
    //     console.log("Nome:", nome);
    //     console.log("E-mail:", email);
    //     console.log("Matrícula:", matricula);
    //     console.log("Opcao:", opcao);
    //     console.log("Senha:", senha);
    // };

    return (
        <>
        <GlobalStyle />
        <Container>
            <LoginContrainer>
                <LoginWrap>
                    {/* <form onSubmit={handleSubmit}> */}
                        <TextTitle><LoginTitle>Sign Up</LoginTitle></TextTitle>
                        <Input type="text" placeholder="Nome Completo" />
                        <Input type="text" placeholder="Email" />
                        <Input type="text" placeholder="Matrícula" />
                        <ButtonDrpDwon>
                            <option value="" disabled selected>Cargo</option>
                            <option value="Professor">Professor</option>
                            <option value="Professor">Aluno</option>
                            <option value="Professor">Externo</option>
                        </ButtonDrpDwon>
                        <Input type="password" placeholder="Senha" />
                        <LoginButton>Entrar</LoginButton>
                    {/* </form> */}
                </LoginWrap>
            </LoginContrainer>
        </Container> 
        </>
    )
}