import { Datagrid, DateField, List, ReferenceField, TextField } from "react-admin";
import { CardHeader } from '@mui/material';

export default function IncomeDataManagementList() {
    return <>
        <CardHeader
            title="Таблица: Доходы"
            subheader="Таблица Доходы: предназначена для управления данными о расходах компании. Она предоставляет пользователям возможность просматривать, фильтровать, сортировать, редактировать и добавлять новые записи о расходах."
        />
        <List>
            <Datagrid>
                <DateField source="dateIncome" showTime />
                <ReferenceField source="category.id" reference="costs/categories">
                    <TextField source="name"/>
                </ReferenceField>
                <ReferenceField source="counterparty.id" reference="counterparty">
                    <TextField source="name"/>
                </ReferenceField>
                <ReferenceField source="project.id" reference="project">
                    <TextField source="name"/>
                </ReferenceField>
                <TextField source="amount" />
                <TextField source="description" />
            </Datagrid>
        </List>
    </>
}