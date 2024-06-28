import { CardHeader } from "@mui/material";
import CostsSettingsCategoryList from "./category/List";

export default function CostsSettingsView() {
    
    return <>
        <CardHeader
            title="Расходы: Настройки"
        />
        <CostsSettingsCategoryList />
        {/* <CostsSettingsCustomFieldsList /> */}
    </>
}