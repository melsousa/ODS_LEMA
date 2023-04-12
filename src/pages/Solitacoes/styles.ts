import styled, { createGlobalStyle } from "styled-components";

export const Contrainer = styled.div `
  width: 100%;
  /* min-height: 100vh; */
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  /* padding: 15px; */
  /* background-color: ${props => props.theme.colors["background-dark"]}; */
`;

export const LoginWrap = styled.div`
  width: 70.625rem;
  /* height: 36.375rem; */
  background-color: ${props=>props.theme.colors["background-light"]};
  /* border-radius: 5px; */
  overflow: hidden;
  display: flex;
  flex-wrap: wrap; 
  /* justify-content: center;  */
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
  outline: none;
  cursor: pointer
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
  outline: none;
  cursor: pointer
`;

export const DropDwonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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
  outline: none;
  cursor: pointer
`;

export const GapContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;