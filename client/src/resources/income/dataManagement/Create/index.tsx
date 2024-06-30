import { Button } from "@mui/material";
import { Create, SimpleForm, useRedirect } from "react-admin";
import BackArrow from "../../../../icons/backArrow.png";
import { AutocompleteInput, DateTimeInput, NumberInput, ReferenceInput, required, TextInput } from "react-admin";

export default function IncomeDataManagementCreate() {
    const redirect = useRedirect();

    return <div>
        <Button
            variant="text"
            onClick={() => redirect('list', '/income/data')}
        >
            <img src={BackArrow} style={{ marginRight: '8px' }} />
            Назад
        </Button>
        <Create>
            <SimpleForm>
                <DateTimeInput source="dateIncome" label="Дата транзакции" fullWidth required />
                <ReferenceInput source="categoryId" reference="costs/categories" >
                    <AutocompleteInput label="Категория" optionText="name" fullWidth validate={[required()]} />
                </ReferenceInput>
                <ReferenceInput source="counterpartyId" reference="counterparty" >
                    <AutocompleteInput label="Контрагент" optionText="name" fullWidth validate={[required()]} />
                </ReferenceInput>
                <ReferenceInput source="projectId" reference="project" >
                    <AutocompleteInput label="Проект" optionText="name" fullWidth validate={[required()]} />
                </ReferenceInput>
                <NumberInput source="amount" label="Сумма" fullWidth required />
                <TextInput multiline={true} source="description" label="Описание" fullWidth required />
            </SimpleForm>
        </Create>
    </div>
}