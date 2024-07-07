import { Input, Label, Select, Text } from "@fluentui/react-components";
import { DatePicker } from "@fluentui/react-datepicker-compat";
import Title from "@shared/ui/Title/Title";

const CostDataCreate = () => {
    return <>
        <Title>Создание расхода</Title>
        <form>
            <Label>Дата транзакции</Label>
            <DatePicker
                placeholder="Select a date..."
                allowTextInput
                style={{ width: '100%' }}
            />
            <Label>Категория</Label>
            <Select>
                <option>Red</option>
                <option>Green</option>
                <option>Blue</option>
            </Select>
            <Label>Контрагент</Label>
            <Select>
                <option>Red</option>
                <option>Green</option>
                <option>Blue</option>
            </Select>
            <Label>Проект</Label>
            <Select>
                <option>Red</option>
                <option>Green</option>
                <option>Blue</option>
            </Select>
            <Label>Сумма</Label>
            <Input
                style={{ width: '100%' }}
                contentBefore={
                    <Text size={400}>
                        ₽
                    </Text>
                }
                contentAfter={
                    <Text size={400}>
                        .00
                    </Text>
                }
            />
            <Input style={{ width: '100%' }} />
        </form>
    </>
};

export default CostDataCreate;