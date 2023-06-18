
import { Admin, Resource, ListGuesser, EditGuesser, ShowGuesser } from 'react-admin';
import { dataProvider } from './dataProvider';
import { authProvider } from './authProvider';

export const App = () => (
    <Admin
        dataProvider={dataProvider}
		authProvider={authProvider}
	>
        <Resource name="root" list={ListGuesser} edit={EditGuesser} show={ShowGuesser} />
		<Resource name="12345678" list={ListGuesser} edit={EditGuesser} show={ShowGuesser} />
    </Admin>
);

//janedoe ; password
//johndoe ; passowrd