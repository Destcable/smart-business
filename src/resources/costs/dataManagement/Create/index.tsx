import { Button } from "@mui/material";
import { Create, SimpleForm, useRedirect } from "react-admin";
import CostsDataManagementCreateFields from "./CostsDataManagementCreateFields";
import BackArrow from "../../../../icons/backArrow.png";

export default function CostsDataManagementCreate() {
    const redirect = useRedirect();

    return <div>
        <Button
            variant="text"
            onClick={() => redirect('list', '/costs/data')}
        >
            <img src={BackArrow} style={{ marginRight: '8px'}}/>
            Назад
        </Button>
        <Create>
            <SimpleForm>
                <CostsDataManagementCreateFields />
            </SimpleForm>
        </Create>
    </div>
}