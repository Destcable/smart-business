import { AutocompleteInput, DateTimeInput, NumberInput, ReferenceInput, TextInput } from "react-admin";

export default function CostsDataManagementCreateFields() {
    return <>
        <DateTimeInput source="dateCost" label="Дата транзакции" fullWidth required />
        <ReferenceInput source="categoryId" reference="costs/categories" isRequired={true}>
            <AutocompleteInput label="Категория" optionText="name" fullWidth isRequired={true}/>
        </ReferenceInput>
        <NumberInput source="amount" label="Сумма" fullWidth required />
        <TextInput source="project" label="Проект" fullWidth required />
        <TextInput source="counterparty" label="Контрагент" fullWidth required />
        <TextInput multiline={true} source="description" label="Описание" fullWidth required />
    </>
}