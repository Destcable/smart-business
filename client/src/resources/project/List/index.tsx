import { Datagrid, List, TextField } from "react-admin";
import { CardHeader } from '@mui/material';

export default function ProjectList() {
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