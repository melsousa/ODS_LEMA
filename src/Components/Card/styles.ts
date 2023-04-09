import styled from "styled-components";

interface CardColorProps{
    backgroundColor: 'background-blue-light' | 'background-green-light' | 'background-red-light' | 'background-yellow-light'
    borderColor: 'background-blue' | 'background-green' | 'background-red' | 'background-yellow'
}

export const CardContainer = styled.div<CardColorProps>`
    width: 100%;
    height: 4.375rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${props => props.theme.colors[props.backgroundColor]};
    border: solid 1px ${props => props.theme.colors[props.borderColor]};
    border-radius: 5px;
    padding: 0 1rem;
`;

export const Text = styled.p`
    color: ${props => props.theme.colors["text-dark"]};
    font-size: 1rem;
    font-weight: 600;

`;