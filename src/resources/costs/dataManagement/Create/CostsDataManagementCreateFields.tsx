import { AutocompleteInput, DateTimeInput, NumberInput, ReferenceInput, required, TextInput } from "react-admin";

export default function CostsDataManagementCreateFields() {
    return <>
        <DateTimeInput source="dateCost" label="Дата транзакции" fullWidth required />
        <ReferenceInput source="categoryId" reference="costs/categories" >
            <AutocompleteInput label="Категория" optionText="name" fullWidth validate={[required()]}/>
        </ReferenceInput>
        <ReferenceInput source="counterpartyId" reference="counterparty" >
            <AutocompleteInput label="Контрагент" optionText="name" fullWidth validate={[required()]}/>
        </ReferenceInput>
        <NumberInput source="amount" label="Сумма" fullWidth required />
        <TextInput source="project" label="Проект" fullWidth required />
        <TextInput multiline={true} source="description" label="Описание" fullWidth required />
    </>
}