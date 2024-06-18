import { Admin, Resource } from "react-admin";
import { CostsDataManagementList } from "./resources/costs";
import dataProvider from "./dataProvider/dataProvider";


const App = () => (
    // @ts-ignore
    <Admin dataProvider={dataProvider}>
        <Resource name="costs" list={CostsDataManagementList} />
    </Admin>
);

export default App;
