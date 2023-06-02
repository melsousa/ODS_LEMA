<<<<<<< HEAD
=======
import { InputWithBorderBottom } from "../../Components/InputWithBorderBottom";
import { Button } from "../../Components/Button";
import { SelectWithDropDow } from "../../Components/SelectWithDropDow";
>>>>>>> e6d5cf6db8df745d17125bbb01a5d9e653101123
import { useState } from 'react'
import { GlobalStyle, 
    Container,
    LoginContrainer, 
    LoginWrap, 
<<<<<<< HEAD
    LoginTitle, 
    Input, TextTitle,
    ButtonDrpDwon, 
    LoginButton} from './styles'
=======
    LoginTitle,
    TextTitle,} from './styles'
>>>>>>> e6d5cf6db8df745d17125bbb01a5d9e653101123

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
<<<<<<< HEAD

=======
    const options = [
        { value: '', label: 'Cargo', disabled: true, selected: true, hidden: true },
        { value: '1', label: 'Professor' },
        { value: '2', label: 'Aluno' },
        { value: '2', label: 'Externo' }
    ]
>>>>>>> e6d5cf6db8df745d17125bbb01a5d9e653101123
    return (
        <>
        <GlobalStyle />
        <Container>
            <LoginContrainer>
                <LoginWrap>
                    {/* <form onSubmit={handleSubmit}> */}
                        <TextTitle><LoginTitle>Sign Up</LoginTitle></TextTitle>
<<<<<<< HEAD
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
=======
                        <InputWithBorderBottom size="large" type="text" placeholder="Nome Completo" />
                        <InputWithBorderBottom size="large" type="text" placeholder="E-mail" />
                        <InputWithBorderBottom size="large" type="text" placeholder="Matrícula" />
                        <SelectWithDropDow  data={options} size="large"/>
                        <InputWithBorderBottom size="large" type="text" placeholder="Senha" />
                        <Button size="large" buttonType="accept" title="ENTRAR"/>
>>>>>>> e6d5cf6db8df745d17125bbb01a5d9e653101123
                    {/* </form> */}
                </LoginWrap>
            </LoginContrainer>
        </Container> 
        </>
    )
<<<<<<< HEAD
}
=======
}

>>>>>>> e6d5cf6db8df745d17125bbb01a5d9e653101123
