import { useState } from "react";
import { Button } from "../../Components/Button";
import { Card } from "../../Components/Card";
import { InputWithBorderBottom } from "../../Components/InputWithBorderBottom";
import { OrderContainer, Content } from "./styles";
import { NotificationCard } from "../../Components/NotificationCard";
import { RightNavBar } from "../../Components/RightNavBar";
import { ConfirmOverlay } from "../../Components/ConfirmOverlay";

export function AllOrders() {
    const [text, setText] = useState('');
    const [type, setType] = useState('');

    const options = [
        { key: 1, value: '1', label: 'impressora 3D' },
        { key: 2, value: '2', label: 'MAQUINA DE CORTE' }
    ]
    return (
        <OrderContainer>
            <Content>
                <select onChange={e => setType(e.target.value)} >
                    {
                        options.map((value) =>(
                            <option key={value.key} value={value.value} >{value.label}</option>
                        ))
                    }
                </select>
                {
                    type === '1' ?
                        (<div><Button buttonType="accept" size="large" title="Confirmar" />
                            <InputWithBorderBottom size="large" type="text" placeholder="Pesquisa" />
                            <NotificationCard date="quinta-feira" userName="Luan" notification="aceitou sua requisição para impressão 3D na"></NotificationCard>
                        </div>)
                        :
                        (
                            <div>Hello World</div>
                        )
                }

            </Content>
        </OrderContainer>
    )
}