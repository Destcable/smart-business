import { Button } from "@mui/material";
import { useRedirect } from "react-admin";

export default function CostsSettingsCustomFieldsListActions() { 
    const redirect = useRedirect();
    
    return <Button variant="contained" onClick={() => redirect('create', '/costs/customFields')}>Добавить</Button>
}