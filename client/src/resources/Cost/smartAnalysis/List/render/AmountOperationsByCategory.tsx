import { FC } from "react";
import { analyzeCostByCategory } from "../../../../../smartAnalysis/Cost/analyzeByCategory";

interface AmountOperationsByCategoryProps { 
    categorys: any
}

const AmountOperationsByCategory: FC<AmountOperationsByCategoryProps> = ({ 
    categorys
}) => { 
    const amountOperationsByCategory = analyzeCostByCategory(categorys)?.amounts();
    if (!amountOperationsByCategory) return <span>Информация отсутствует</span>

    return Object.entries(amountOperationsByCategory).map(([key, value]) => {
        const category = categorys.filter((cat:any) => cat.id == key);
        return (
            <p key={key}>Категория {category[0].name}: {value}</p>
        )
    }
    )
}

export default AmountOperationsByCategory;