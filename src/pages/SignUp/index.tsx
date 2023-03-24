// import { useState } from 'react'
import { GlobalStyle, Container, LoginContrainer, LoginWrap, LoginTitle, TextTitle, Input, ButtonDrpDwon, LoginButton} from './styles'

export function SignUp(){
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