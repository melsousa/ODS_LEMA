import styled from "styled-components";

export const Container = styled.div`
    height: calc(100% - 8.84%);
    width: 22.063rem;
    background-color: ${props => props.theme.colors["background-dark"]};
    position: absolute;
    right: 0;
    top: 8.71%;
    @keyframes slideIn {
        from {
            width: 0rem;
        }

        to{
            width: 22.063rem;
        }
    }

    animation-duration: 300ms;
    animation-name: slideIn;
`;