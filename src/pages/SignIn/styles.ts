import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
`;

export const LoginContrainer = styled.div `
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 15px;
  background-color: ${props => props.theme.colors["background-dark"]};
`;

export const LoginWrap = styled.div`
  width: 34.375rem;
  height: 34.375rem;
  background-color: ${props=>props.theme.colors["background-light"]};
  border-radius: 5px;
  overflow: hidden;
  padding: 70px 55px 33px 55px;
  box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.2) ;
  display: flex;
  flex-wrap: wrap; 
  justify-content: center; 
  align-items: center;  
`;

export const LoginForm = styled.form`
  width: 100%;

`;
export const TextTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: left;
  align-items: left;
`; 
export const LoginTitle = styled.span`
  display: block;
  font-size: 30px;
  color:  ${props=>props.theme.colors["text-dark"]};
  line-height: 1.2;
  text-align: left;
  margin-bottom: 20px;
`;

export const LoginTitleImg = styled.img`
  width: 90px;
`;

export const Input = styled.input`
  font-size: 15px;
  color: ${props=>props.theme.colors["text-dark"]};
  border: none;
  display: block;
  width: 100%;
  height: 60px;
  background-color: ${props=>props.theme.colors["green-light"]};
  margin-bottom: 40px;
  border-radius: 5px;
  border-bottom:1px solid ${props => props.theme.colors["green-dark"]};
  padding-left: 10px; 
  outline: none
`;

export const ContainerLoginButton = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-bottom: 13px;
`;

export const LoginButton = styled.button`
  background-color: ${props=>props.theme.colors["green-dark"]};
  color: ${props=>props.theme.colors["text-light"]};
  width: 250px;
  height: 60px;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  
  :hover{
        background-color: ${props => props.theme.colors['hover-green-dark']};
        transition: 200ms;
    }
`;

export const TextCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-top: 5px; */
`;

export const Text1 = styled.span`
  font-size: 16px;
  color:  ${props=>props.theme.colors["text-dark"]};
  line-height: 1.2;
  padding-right: 5px;
  text-decoration: none;
`;
export const Text2 = styled.p`
  font-size: 16px;
  color:  ${props=>props.theme.colors["green-dark"]};
  line-height: 1.2;
  text-decoration: none;
  cursor: pointer;
`;
export const TextSenha = styled.div`
  display: flex;
  justify-content: right;
  align-items: right;
`; 

export const ForgotPassword = styled.p`
  position: absolute;
  top: 415px;
  text-align: right;
  color: ${props=>props.theme.colors["text-dark"]};
  cursor: pointer;
`;
/* export const TextoDireita = styled.span`
  text-align: right;
  color: ${props=>props.theme.colors["text-dark"]};
  cursor: pointer;
`; */

/* export const FocusInput = styled.span`
   position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
  color: ${props=>props.theme.colors["text-dark"]}; 
`; */

// export const theme = {
//     colors:{
//         "background-dark": "#292929",
//     },
// };

// export const Container = styled.div`
//     width: 100%;
//     height: 100%;
//     display: flex;
//     background-color: ${props => props.theme.colors["background-dark"]}
//     position: relative;
// `;

// export const 

/* export const Wrap_login = styled.div`
    width: 750px;
    height: 650px;
    background-color: ${props => props.theme.colors["background-light"]};
    
    /* background-color: ${props => props.theme.colors["background-light"]};
    border-radius: 5px;
    overflow: hidden;
    padding: 70px 55px 33px 55px;
    box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.2) ; 
`; */
