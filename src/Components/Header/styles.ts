import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 6.75rem;
    background-color: ${props => props.theme.colors["background-dark"]};
    display: flex;
    align-items: center;
    padding: 0 2rem;
    justify-content: space-between;
`;

export const LogoContainer = styled.div`
    width: 10.625rem;
    height: 4.375;
    color: #fff;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 60px;
`;

export const ButtonContainer = styled.div`
    width: auto;
    display: flex;
    gap: 2;
`;

export const Button = styled.button`
    background-color: transparent;
    border: none;
    color: ${props => props.theme.colors["text-light"]};
    font-size: 24px;
    font-weight: 400;
    margin-left: 2rem;
`;