import { Button } from "@mui/material";
import { useRedirect } from "react-admin";

export default function CostsDataManagementListActions() {
    const redirect = useRedirect();

    return <div>
        <Button variant="contained" onClick={() => redirect('create', '/costs')}>Добавить расход</Button>
        <Button variant="outlined">Дополнительно</Button>
    </div>
}