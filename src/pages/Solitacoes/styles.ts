<<<<<<< HEAD
import styled, { createGlobalStyle } from "styled-components";

export const Contrainer = styled.div `
  width: 100%;
  /* min-height: 100vh; */
=======
import styled from "styled-components";

export const Contrainer = styled.div `
  width: 100%;
>>>>>>> e6d5cf6db8df745d17125bbb01a5d9e653101123
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
<<<<<<< HEAD
  /* padding: 15px; */
  /* background-color: ${props => props.theme.colors["background-dark"]}; */
=======
>>>>>>> e6d5cf6db8df745d17125bbb01a5d9e653101123
`;

export const LoginWrap = styled.div`
  width: 70.625rem;
<<<<<<< HEAD
  /* height: 36.375rem; */
  background-color: ${props=>props.theme.colors["background-light"]};
  /* border-radius: 5px; */
  overflow: hidden;
  display: flex;
  flex-wrap: wrap; 
  /* justify-content: center;  */
=======
  background-color: ${props=>props.theme.colors["background-light"]};
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
>>>>>>> e6d5cf6db8df745d17125bbb01a5d9e653101123
  align-items: center;  
`;

export const TextLeft = styled.div`
  display: flex;
  justify-content: left;
  align-items: left;
  margin-top: 5px;
`;

export const TextSolitacao = styled.span`
    color: ${props=>props.theme.colors["text-dark"]};
    font-size: 45px;
    text-align: left;
    font-weight: bold;
    margin-bottom: 20px;
    
`;

<<<<<<< HEAD
export const Input = styled.input`
  font-size: 15px;
  color: ${props=>props.theme.colors["text-dark"]};
  border: none;
  display: block;
  width: 100%;
  height: 60px;
  background-color: ${props=>props.theme.colors["green-light"]};
  margin-bottom: 20px;
  border-radius: 5px;
  border-bottom:1px solid ${props => props.theme.colors["green-dark"]};
  padding-left: 10px; 
  outline: none
`;

export const InputCalendarWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const ButtonDrpDwon = styled.select`
  font-size: 15px;
  color: ${props=>props.theme.colors["text-dark"]};
  margin-bottom: 20px;
  border: none;
  display: block;
  width: 45%;
  height: 60px;
  background-color: ${props=>props.theme.colors["green-light"]};
  border-radius: 5px;
  border-bottom:1px solid ${props => props.theme.colors["green-dark"]};
  padding-left: 10px;
  outline: none
  cursor: pointer;
=======
export const InputCalendarWrapper = styled.div`
  width: 100%;
  gap: 1rem;
  display: flex; 
  flex-direction: row;
>>>>>>> e6d5cf6db8df745d17125bbb01a5d9e653101123
`;

export const Calendario = styled.button`
  font-size: 15px;
  color: ${props=>props.theme.colors["text-dark"]};
  margin-bottom: 20px;
  border: none;
  display: block;
  width: 45%;
  height: 60px;
  background-color: ${props=>props.theme.colors["green-light"]};
  border-radius: 5px;
  border-bottom:1px solid ${props => props.theme.colors["green-dark"]};
  padding-left: 10px;
<<<<<<< HEAD
  outline: none
  cursor: pointer;
=======
  outline: none;
  cursor: pointer
>>>>>>> e6d5cf6db8df745d17125bbb01a5d9e653101123
`;

export const DropDwonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
<<<<<<< HEAD
  margin-bottom: 20px;
`;

export const DropDwon = styled.select`
  font-size: 15px;
  color: ${props=>props.theme.colors["text-dark"]};
  margin-bottom: 20px;
  border: none;
  display: block;
  width: 30%;
  height: 60px;
  background-color: ${props=>props.theme.colors["green-light"]};
  border-radius: 5px;
  border-bottom:1px solid ${props => props.theme.colors["green-dark"]};
  padding-left: 10px;
  outline: none
  cursor: pointer;
=======
  gap: 1rem;
`;

export const GapContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
`;

export const ButtonRight = styled.div`
  display: flex;
  justify-content: right;
  align-items: right;
  margin-top: 5px;
  gap: 1rem;
>>>>>>> e6d5cf6db8df745d17125bbb01a5d9e653101123
`;