import styled from "styled-components";


export const Table = styled.table`
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
`;

export const Thead = styled.thead`
    background-color: #f2f2f2;
    height: 4.375rem;
`;
export const TableBody = styled.tbody`
  
`;

export const Td = styled.td`
    padding: 8px;
    color: #646377;
    font-size: 1rem;
    font-weight: 500;
`;

export const Tr = styled.tr`
    height: 4.375rem;
    border-radius: 8px;
    :nth-child(odd) {
        background-color: #E8E6E6; /* Cor cinza para linhas ímpares */
    }
    :nth-child(even) {
        background-color: #ffffff; /* Cor branca para linhas pares */
    }
`;

export const Th = styled.th`
    padding: 8px;
    text-align: left;
`;


