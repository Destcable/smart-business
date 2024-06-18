import { Button } from "@mui/material";
import { Create, SimpleForm, useRedirect } from "react-admin";
import CostsDataManagementCreateFields from "./CostsDataManagementCreateFields";

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
                <CostsDataManagementCreateFields />
            </SimpleForm>
        </Create>
    </div>
}