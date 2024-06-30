import { Button } from "@mui/material";
import { Create, SimpleForm, TextInput, useRedirect } from "react-admin";
import BackArrow from "../../../../icons/backArrow.png";

export default function ProjectDataManagementCreate() {
    const redirect = useRedirect();

    return <div>
        <Button
            variant="text"
            onClick={() => redirect('list', '/counterparty')}
        >
            <img src={BackArrow} style={{ marginRight: '8px'}}/>
            Назад
        </Button>
        <Create>
            <SimpleForm>
                <TextInput source="name" required fullWidth/>
            </SimpleForm>
        </Create>
    </div>
}