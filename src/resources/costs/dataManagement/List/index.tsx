import { Datagrid, DateField, List, ReferenceField, TextField } from "react-admin";
import { CardHeader } from '@mui/material';
import CostsDataManagementListActions from "./CostsDataManagementListActions";

export default function CostsDataManagementList() {
    return <>
        <CardHeader
            title="Таблица: Расходы"
            subheader="Таблица Расходы: предназначена для управления данными о расходах компании. Она предоставляет пользователям возможность просматривать, фильтровать, сортировать, редактировать и добавлять новые записи о расходах."
        />
        <List actions={<CostsDataManagementListActions />}>
            <Datagrid>
                <DateField source="dateCost" label="Дата транзакции" showTime />
                <ReferenceField source="category.id" reference="costs/categories" label="Категория">
                    <TextField source="name"/>
                </ReferenceField>
                <TextField source="amount" label="Сумма" />
                <TextField source="description" label="Описание" />
                <TextField source="project" label="Проект" />
                <TextField source="counterparty" label="Контрагент" />
            </Datagrid>
        </List>
    </>
}