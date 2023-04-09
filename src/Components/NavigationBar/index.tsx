import { useState } from "react";
import { Button, NavigationContainer, QtyDot } from "./styles";

export function NavigationBar() {
    return (
        <NavigationContainer>
            <Button backgroundColor="background-blue-light" >
                <QtyDot backgroundColor="background-blue" >1</QtyDot>
                Em produção
            </Button>
            <Button backgroundColor="background-yellow-light">
                <QtyDot backgroundColor="background-yellow" >10</QtyDot>
                Em Análise
            </Button>
            <Button backgroundColor="background-green-light" >
                <QtyDot backgroundColor="background-green" >20</QtyDot>
                Aprovados
            </Button>
            <Button backgroundColor="background-red-light" >
                <QtyDot backgroundColor="background-red" >15</QtyDot>
                Rejeitados
            </Button>
            <Button backgroundColor="background-gray-light" >
                Todos os pedidos
            </Button>
        </NavigationContainer>
    )
}