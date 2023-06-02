import { Container, Select } from "./styles";
import { CaretDown } from "phosphor-react"

interface DataProps{
    label: string,
    value: string,
    disabled?: boolean,
    selected?: boolean
}

interface SelectProps {
    size: 'small' | 'medium' | 'large'
    data: Array<DataProps>
    onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}



export function SelectWithDropDow({size, data, onChange, ...rest}: SelectProps){
    return(
        <Container size={size} >
            <Select {...rest} defaultValue="" onChange={onChange}>
                {data.map((value) =>(
                    <option 
                    key={value.value}
                    value={value.value}
                    disabled={value.disabled}
                    selected={value.selected}>
                    {value.label}</option>
                ))}
                <CaretDown size={32} color="#f80202" />
            </Select>
        </Container>
    )
}