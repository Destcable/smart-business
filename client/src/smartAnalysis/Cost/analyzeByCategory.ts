const categorysCost: any = {};

const dataCost = [
    { id: 1, category: { id: 1 }, amount: 2000 },
    { id: 2, category: { id: 1 }, amount: 4000 },
    { id: 3, category: { id: 2 }, amount: 12000 }
];

function amount_in_category(categorys: any) {
    const copyCategorys = {...categorys};

    for (const category in copyCategorys) {
        const categoryAmounts = copyCategorys[category];

        const summAmounts = categoryAmounts.reduce((acc: number, current: number) => acc + current, 0);
        copyCategorys[category] = summAmounts;
    }

    return copyCategorys
}

function count_operations_in_category(categorys: any) { 
    const copyCategorys = {...categorys};

    for (const category in copyCategorys) {
        const countOperations = copyCategorys[category].length;
        copyCategorys[category] = countOperations        
    }

    return copyCategorys;
}

export const analyzeCostByCategory = (categorys: any) => { 
    if (!categorys) return null;
     
    categorys.map(({ id }: any) => categorysCost[id] = [])

    categorys.map(({ id: categoryId }: any) => dataCost
        .filter(({ category}) => category.id === categoryId)
        .map(({ amount}) => categorysCost[categoryId].push(amount))
    );

    return { 
        amounts: () => { 
            return amount_in_category(categorysCost)
        },
        countOperations: () => { 
            return count_operations_in_category(categorysCost)
        }
    }
}
