import { Button } from "@mui/material";
import { Create, DateTimeInput, SimpleForm, TextInput, useRedirect } from "react-admin";

export default function CostsDataManagementCreate() {
    const redirect = useRedirect();
    return <div>
        <Button
            variant="text"
            onClick={() => redirect('list', '/costs')}
        >
            Назад
        </Button>
        <Create>
            <SimpleForm>
                <DateTimeInput source="dateCost" label="Дата транзакции" />
                <TextInput source="category" label="Категория"/>
            </SimpleForm>
        </Create>
    </div>
}