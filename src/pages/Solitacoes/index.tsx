import { Header } from '../../Components/Header'
import { Contrainer,
    LoginWrap,
    TextSolitacao,
    TextLeft,
    Input,
    ButtonDrpDwon, 
    DropDwonWrapper,
    DropDwon,
    InputCalendarWrapper, Calendario} from './styles'
import  {useState} from 'react';
import { Calendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css'

export function Solitacoes(){
    const [date,setDate] = useState(new Date())
    const [showCalendar, setShowCalendar] = useState(false);
    const [value, onChange] = useState(new Date());
    const handleButtonClick = () => {
        setShowCalendar(!showCalendar);
    }
    return (
        <>
        <Header/>
        <Contrainer>
            <LoginWrap>
                <TextLeft><TextSolitacao>Solicitação</TextSolitacao></TextLeft>
            <Input type="text" placeholder="Nome Completo" />
            <Input type="text" placeholder="Matricula" />
            <Input type="text" placeholder="E-mail" />
            <InputCalendarWrapper>
                <ButtonDrpDwon>
                    <option value="" disabled selected>Tipo de Maquina</option>
                    <option value="Impressora de Resina">Impressora de Resina</option>
                    <option value="Impressora de PLA">Impressora de PLA</option>
                    <option value="Impressora de ABS">Impressora de ABS</option>
                    <option value="Maquina de Corte">Maquina de Corte</option>
                    <option value="Scanner 3D">Scanner 3D</option>
                </ButtonDrpDwon>
                <Calendario onClick={handleButtonClick}>Selecione uma Data</Calendario>
                {showCalendar && (
                    <Calendar/>
                )}
            </InputCalendarWrapper>
            <DropDwonWrapper>
                <DropDwon>
                    <option value="" disabled selected>Turno de Preferência:</option>
                    <option value="Manhã">Manhã</option>
                    <option value="Tarde">Tarde</option>
                    <option value="Noite">Noite</option>
                    <option value="Madrugada">Madrugada</option>
                </DropDwon>
                <DropDwon>
                    <option value="" disabled selected>Necessidade:</option>
                    <option value="Alta">Alta</option>
                    <option value="Média">Média</option>
                    <option value="Baixa">Baixa</option>
                </DropDwon>
                <DropDwon>
                    <option value="" disabled selected>Cor para Impressão:</option>
                    <option value="Preto">Preto</option>
                    <option value="Vermelho">Vermelho</option>
                    <option value="Amarelo">Amarelo</option>
                    <option value="Azul">Azul</option>
                </DropDwon>
            </DropDwonWrapper>
            <Input type="text" placeholder="Descrição" />
            <Input type="text" placeholder="Procurar arquivos" />
            </LoginWrap>
        </Contrainer>
        
        </>
    )
}