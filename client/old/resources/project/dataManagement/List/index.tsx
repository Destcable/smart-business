import { CardHeader } from "@mui/material";
import { Datagrid, List, TextField } from "react-admin";

export default function ProjectDataManagementList() {
    return <>
        <CardHeader
            title="Таблица: Проекты"
            subheader="Таблица Проекты: предназначена для управления данными о расходах компании. Она предоставляет пользователям возможность просматривать, фильтровать, сортировать, редактировать и добавлять новые записи о расходах."
        />
        <List>
            <Datagrid>
                <TextField source="name" />
            </Datagrid>
        </List>
    </>
}