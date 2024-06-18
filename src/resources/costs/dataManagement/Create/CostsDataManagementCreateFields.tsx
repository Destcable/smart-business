import { DateTimeInput, NumberInput, TextInput } from "react-admin";

export default function CostsDataManagementCreateFields() {
    return <>
        <DateTimeInput source="dateCost" label="Дата транзакции" fullWidth required />
        <TextInput source="category" label="Категория" fullWidth required />
        <NumberInput source="amount" label="Сумма" fullWidth required />
        <TextInput source="project" label="Проект" fullWidth required />
        <TextInput source="counterparty" label="Контрагент" fullWidth required />
        <TextInput multiline={true} source="description" label="Описание" fullWidth required />
    </>
}