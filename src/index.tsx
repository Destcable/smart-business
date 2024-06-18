import { Admin, Resource, ListGuesser, ShowGuesser } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { CostsDataManagementList } from "./resources/costs";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="costs" list={CostsDataManagementList} />
        <Resource name="posts" list={ListGuesser} show={ShowGuesser} />
        <Resource name="comments" list={ListGuesser} show={ShowGuesser} />
    </Admin>
);

export default App;
