import { CardHeader } from "@mui/material";
import CostsSettingsCategoryList from "./Category/List";

export default function CostsSettingsView() {
    
    return <>
        <CardHeader
            title="Расходы: Настройки"
        />
        <CostsSettingsCategoryList />
    </>
}