import { CardHeader } from "@mui/material";
import CostsSettingsCategoryList from "./CostsSettingsCategoryList";

export default function CostsSettingsView() {
    
    return <>
        <CardHeader
            title="Расходы: Настройки"
        />
        <CostsSettingsCategoryList />
    </>
}