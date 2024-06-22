import { Button } from "@mui/material";
import { Create, SimpleForm, TextInput, useRedirect } from "react-admin";
import BackArrow from "../../../../../icons/backArrow.png";

export default function CostsSettingsCategoryCreate() {
    const redirect = useRedirect();

    return <div>
        <Button
            variant="text"
            onClick={() => redirect('list', '/costs/settings')}
        >
            <img src={BackArrow} style={{ marginRight: '8px'}}/>
            Назад
        </Button>
        <Create>
            <SimpleForm>
                <TextInput source="name" label="Наименование категории" fullWidth required />
            </SimpleForm>
        </Create>
    </div>
}