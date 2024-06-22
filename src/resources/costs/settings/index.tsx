import { CardHeader } from "@mui/material";
import CostsSettingsCategoryList from "./category/List";
import CostsSettingsCustomFieldsList from "./customFields/List";

export default function CostsSettingsView() {
    
    return <>
        <CardHeader
            title="Расходы: Настройки"
        />
        <CostsSettingsCategoryList />
        <CostsSettingsCustomFieldsList />
    </>
}