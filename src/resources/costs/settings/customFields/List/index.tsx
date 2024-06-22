import { CardHeader } from "@mui/material";
import { Datagrid, List, TextField } from "react-admin";
import CostsSettingsCustomFieldsListActions from "./CostsSettingsCustomFieldsListActions";

export default function CostsSettingsCustomFieldsList() {
    return <List
        actions={<CostsSettingsCustomFieldsListActions />} 
        resource="costs/customFields"
    >
        <CardHeader
            titleTypographyProps={{ variant:'subtitle1' }}
            subheaderTypographyProps={{ variant: 'subtitle2' }}
            title="Кастомные поля"
            subheader="Вы можете создавать и удалять кастомные поля, а также использовать их при работе. 
            После добавления кастомные поля сразу станут доступны"
        />
        <Datagrid>
            <TextField source="name" />
        </Datagrid>
    </List>
}