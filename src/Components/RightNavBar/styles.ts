import styled from "styled-components";

export const Container = styled.div`
    height: 90%;
    width: 353px;
    background-color: ${props => props.theme.colors["background-dark"]};
    position: absolute;
    right: 0;
    top: 10%;
    @keyframes slideIn {
        from {
            width: 0px;
        }

        to{
            width: 353px;
        }
    }

    animation-duration: 300ms;
    animation-name: slideIn;
`;