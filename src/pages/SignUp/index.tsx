// import { useState } from 'react'
import { GlobalStyle, Container, LoginContrainer, LoginWrap, LoginTitle, TextTitle, Input, ButtonDrpDwon, LoginButton} from './styles'

export function SignUp(){
    // const [nome, steNome] = useState('');
    // const [Email, steEmail] = useState('');
    // const [Matrícula, steMatrícula] = useState('');
    // const [opcao, steOpcao] = useState('');
    // const [Senha, steSenha] = useState('');

    // const handleSubmit = (event) => {
    //     event.prevenDefualt();
    //     console.log("Formulário enviado!");
    //     console.log("Nome:", nome);
    //     console.log("E-mail:", Email);
    //     console.log("Matrícula:", Matrícula);
    //     console.log("Opcão:", opcao);
    //     console.log("Senha:", Senha);
    // };
    return (
        <>
        <GlobalStyle />
        <Container>
            <LoginContrainer>
                <LoginWrap>
                    {/* <form onSubmit={handleSubmit}> */}
                        <TextTitle><LoginTitle>Cadastro</LoginTitle></TextTitle>
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