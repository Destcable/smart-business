import getCostCategorySettingsList from "@entities/cost/api/getCostCategorySettingsList";
import { Button, Input, Label, Select, Text } from "@fluentui/react-components";
import { DatePicker } from "@fluentui/react-datepicker-compat";
import Title from "@shared/ui/Title/Title";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { CategorysCostFieldSelect } from "./Fields/CategorysCostFieldSelect";

const CostDataCreate = () => {
    const { register, handleSubmit } = useForm()

    const [dataCategory, setDataCategory] = useState<any>(null);

    getCostCategorySettingsList().then(cost => setDataCategory(cost));

    const onSubmit = (data: any) => console.log(data)

    return <>
        <Title>Создание расхода</Title>
        <form onSubmit={handleSubmit(onSubmit)}>
            <Label>Дата транзакции</Label>
            <DatePicker
                {...register("dateCost", { required: true })}
                placeholder="Select a date..."
                allowTextInput
                style={{ width: '100%' }}
            />
            <Label>Категория</Label>
            <CategorysCostFieldSelect 
                categorys={dataCategory}
                register={register("categoryId", { required: true })}
            />
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
            <Label>Описание</Label>
            <Input style={{ width: '100%' }} />
            <Button type="submit" appearance="primary">Создать</Button>
        </form>
    </>
};

export default CostDataCreate;