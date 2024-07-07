import { Select } from "@fluentui/react-components";
import { FC } from "react";

interface CategorysCostFieldSelectProps { 
    categorys: any,
    register: any
}

const renderCategorysCost = (categorys: any) => { 
    return categorys?.map(({ id, name}: any, index: number) => { 
        return <option key={index} value={id}>{name}</option>
    })
}

export const CategorysCostFieldSelect: FC<CategorysCostFieldSelectProps> = ({ 
    categorys,
    register,
}) => { 
            
    return <Select {...register}>
        <option disabled>Выберите</option>
        {renderCategorysCost(categorys)}
    </Select>
};