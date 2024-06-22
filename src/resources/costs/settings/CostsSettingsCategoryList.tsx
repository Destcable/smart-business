import { CardHeader } from "@mui/material";
import { Datagrid, List, TextField } from "react-admin";

export default function CostsSettingsCategoryList() {
    return <List resource="costs/categories">
        <CardHeader
            titleTypographyProps={{ variant:'subtitle1' }}
            subheaderTypographyProps={{ variant: 'subtitle2' }}
            title="Категории"
            subheader="Вы можете создавать и удалять категории, а также использовать их при работе с анализом и т.п. 
            После добавления категории сразу станут доступны"
        />
        <Datagrid>
            <TextField source="name" />
        </Datagrid>
    </List>
}