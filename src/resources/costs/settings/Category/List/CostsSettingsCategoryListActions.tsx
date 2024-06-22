import { Button } from "@mui/material";
import { useRedirect } from "react-admin";

export default function CostsSettingsCategoryListActions() {
    const redirect = useRedirect();

    return <Button variant="contained" onClick={() => redirect('create', '/costs/categories')}>Добавить</Button>
}