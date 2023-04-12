import { ArrowDown } from "phosphor-react";
import { Container, Select } from "./styles";

interface DataProps{
    label: string,
    value: string,
    disabled?: boolean,
    selected?: boolean,
    key: string
}

interface SelectProps {
    size: 'small' | 'medium' | 'large'
    data: Array<DataProps>
}

export function SelectWithBorderBottom({size, data, ...rest}: SelectProps){
    return(
        <Container size={size} >
            <Select {...rest} defaultValue="">
                {
                    data.map((value) =>(
                        <option 
                        key={value.key} 
                        value={value.value}
                        disabled={value.disabled}
                        selected={value.selected}>
                        {value.label}</option>
                    ))
                }
            </Select>
        </Container>
    )
}