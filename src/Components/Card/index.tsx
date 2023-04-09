import { CardContainer, Text } from "./styles";
interface CardProps{
    backgroundColor: 'background-blue-light' | 'background-green-light' | 'background-red-light' | 'background-yellow-light'
    borderColor: 'background-blue' | 'background-green' | 'background-red' | 'background-yellow'
}
export function Card({backgroundColor, borderColor}:CardProps) {

    return (
        <CardContainer backgroundColor={backgroundColor} borderColor={borderColor} >
            <Text>124578559897</Text>
            <Text>Suporte de mouse</Text>
            <Text>LEMA 03</Text>
            <Text>16/02/2023</Text>
            <Text>8 h</Text>
            <Text>10:00</Text>
            <Text>18:00</Text>
        </CardContainer>
    )
}