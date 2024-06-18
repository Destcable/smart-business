import { Admin, Resource } from "react-admin";
import { CostsDataManagementCreate, CostsDataManagementList } from "./resources/costs";
import dataProvider from "./dataProvider/dataProvider";


const App = () => (
    // @ts-ignore
    <Admin dataProvider={dataProvider}>
        <Resource name="costs" list={CostsDataManagementList} create={CostsDataManagementCreate} />
    </Admin>
);

export default App;
