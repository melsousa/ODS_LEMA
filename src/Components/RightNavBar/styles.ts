import styled from "styled-components";

export const Container = styled.div`
    height: calc(100% - 6.75rem);
    width: 353px;
    background-color: ${props => props.theme.colors["background-dark"]};
    position: absolute;
    right: 0;
    top: 6.75rem;
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