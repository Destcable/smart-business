import { Datagrid, List, TextField } from "react-admin";

export default function CostsDataManagementList() {
    return <List>
        <Datagrid>
            <TextField source="id" />
        </Datagrid>
    </List>
}