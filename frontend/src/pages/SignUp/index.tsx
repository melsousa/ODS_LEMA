import { InputWithBorderBottom } from "../../Components/InputWithBorderBottom";
import { Button } from "../../Components/Button";
import { SelectWithDropDow } from "../../Components/SelectWithDropDow";
import { ChangeEvent, useState } from 'react'
import {
    Container,
    LoginContrainer,
    LoginWrap,
    Title,
    ButtonContainer,
} from './styles'
import { useAuth } from "../../context/useAuth";

export function SignUp() {

    const { signUp } = useAuth();
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [matricula, setMatrícula] = useState('');
    const [cargo, setCargo] = useState('');
    const [senha, setSenha] = useState('');
    const options = [
        { value: "", label: 'Cargo', disabled: true, selected: true, hidden: true },
        { value: "1", label: 'Professor' },
        { value: "2", label: 'Aluno' },
        { value: "3", label: 'Externo' }
    ]

    const handleSubmit = () => {
        console.log(nome, email, senha, parseInt(cargo))
        signUp(nome, email, senha, parseInt(cargo))
    }

    return (
        <>
            <Container>
                <LoginContrainer>
                    <LoginWrap>
                        {/* <form onSubmit={handleSubmit}> */}
                        <Title>Cadastro</Title>
                        <InputWithBorderBottom size="large" type="text" placeholder="Nome Completo" onChange={e => setNome(e.target.value)} />
                        <InputWithBorderBottom size="large" type="text" placeholder="E-mail" onChange={e => setEmail(e.target.value)} />
                        <InputWithBorderBottom size="large" type="text" placeholder="Matrícula" />
                        <SelectWithDropDow data={options} size="large" onChange={e => setCargo(e.target.value)} />
                        <InputWithBorderBottom size="large" type="text" placeholder="Senha" onChange={e => setSenha(e.target.value)} />


                        <ButtonContainer>
                            <Button size="large" buttonType="accept" title="Cadastrar" onClick={handleSubmit} />
                        </ButtonContainer>
                        {/* </form> */}
                    </LoginWrap>
                </LoginContrainer>
            </Container>
        </>
    )
}
