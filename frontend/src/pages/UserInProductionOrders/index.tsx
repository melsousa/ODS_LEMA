import { UserTable } from "../../Components/UserTable";
import { useAuth } from "../../context/useAuth";
import { Container } from "./styles";

export function UserInProductionOrders(){
    const { signOut } = useAuth();

    return(

        <Container>
            <UserTable/>
        </Container>
    );
}