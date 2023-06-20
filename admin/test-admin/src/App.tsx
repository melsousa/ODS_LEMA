
import { Admin, ListGuesser, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server'
import RestProvider from 'ra-data-simple-rest'
import { UserList } from './userList/userList';

const dataProvider = jsonServerProvider('http://localhost:3030')
export const App = () => (
    <Admin
        dataProvider={dataProvider}
	>
        <Resource name="users" list={ListGuesser} />
		
    </Admin>

);

//janedoe ; password
//johndoe ; passowrd