import { FC } from "react";
import { analyzeCostByCategory } from "../../../../../smartAnalysis/Cost/analyzeByCategory";

interface CountOperationsByCategoryProps { 
    categorys: any
}

const CountOperationsByCategory: FC<CountOperationsByCategoryProps> = ({ 
    categorys
}) => { 
    const amountOperationsByCategory = analyzeCostByCategory(categorys).countOperations();

    return Object.entries(amountOperationsByCategory).map(([key, value]) => {
        const category = categorys.filter((cat:any) => cat.id == key);
        return (
            <p key={key}>Категория {category[0].name}: {value}</p>
        )
    }
    )
}

export default CountOperationsByCategory;