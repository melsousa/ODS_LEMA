import { Tr, Table, Th, Td, TableBody, Thead } from "./styles";



export function UserTable() {
    return (

        <Table border={1} >
            <Thead>
                <Th>id</Th>
                <Th>Objeto</Th>
                <Th>Impressora</Th>
                <Th>Data de impressão</Th>
                <Th>Inicio</Th>
                <Th>Término</Th>
            </Thead>
            <TableBody>
                <Tr>
                    <Td>123123124</Td>
                    <Td>Chaveiro</Td>
                    <Td>Lema 03</Td>
                    <Td>Data de impressão</Td>
                    <Td>Inicio</Td>
                    <Td>Término</Td>
                </Tr>
                <Tr>
                    <Td>123123124</Td>
                    <Td>Chaveiro</Td>
                    <Td>Lema 03</Td>
                    <Td>Data de impressão</Td>
                    <Td>Inicio</Td>
                    <Td>Término</Td>
                </Tr>
                <Tr>
                    <Td>123123124</Td>
                    <Td>Chaveiro</Td>
                    <Td>Lema 03</Td>
                    <Td>Data de impressão</Td>
                    <Td>Inicio</Td>
                    <Td>Término</Td>
                </Tr>
                <Tr>
                    <Td>123123124</Td>
                    <Td>Chaveiro</Td>
                    <Td>Lema 03</Td>
                    <Td>Data de impressão</Td>
                    <Td>Inicio</Td>
                    <Td>Término</Td>
                </Tr>
            </TableBody>
        </Table>
    )
}