import { Container, Input } from "./styles";

interface InputProps {
    size: 'small' | 'medium' | 'large'
    placeholder: string
    type: 'text' | 'password'
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function InputWithBorderBottom({size, placeholder, type, onChange, ...rest}: InputProps){
    return(
        <Container size={size}>
            <Input
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                {...rest}
            />
        </Container>
    );
}