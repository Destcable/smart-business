import { Button } from "@mui/material";
import { BooleanInput, Create, required, SelectInput, SimpleForm, TextInput, useRedirect } from "react-admin";
import BackArrow from "../../../../../icons/backArrow.png";

export default function CostsSettingsCustomFieldsCreate() {
    const redirect = useRedirect();
    
    const onSuccess = () => {
        redirect('list', '/costs/settings');
    };

    const transform = (data: any) => { 
        return {
            ...data,
            for: 'costs'
        }
    }

    return (
        <div>
            <Button
                variant="text"
                onClick={() => redirect('list', '/costs/settings')}
            >
                <img src={BackArrow} style={{ marginRight: '8px' }} />
                Назад
            </Button>
            
            <Create transform={transform} mutationOptions={{ onSuccess }}>
                <SimpleForm>
                    <TextInput source="name" label="Наименование поля" fullWidth required />
                    <SelectInput
                        label="Тип поля"
                        source="type"
                        validate={required()}
                        fullWidth
                        choices={[
                            { id: "STRING", name: "STRING" },
                            { id: "NUMBER", name: "NUMBER" },
                            { id: "BOOLEAN", name: "BOOLEAN" },
                        ]}
                    />
                    <BooleanInput source="isRequired" label="Обязательное поле" fullWidth required/>
                </SimpleForm>
            </Create>
        </div>
    );
}
