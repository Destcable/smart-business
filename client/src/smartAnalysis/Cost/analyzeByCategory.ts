const categorysCost: any = {};

const categorys = [
    { id: 1, name: "Зарплаты" },
    { id: 2, name: "Штрафы" },
    { id: 3, name: "Закупка" }
];

const dataCost = [
    { id: 1, category: { id: 1 }, amount: 2000 },
    { id: 2, category: { id: 1 }, amount: 4000 },
    { id: 3, category: { id: 2 }, amount: 12000 }
];

categorys.map(({ id }) => categorysCost[id] = [])

categorys.map(({ id: categoryId }) => dataCost
    .filter(({ category}) => category.id === categoryId)
    .map(({ amount}) => categorysCost[categoryId].push(amount))
);

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

export const analyzeCostByCategory = { 
    amounts: () => { 
        return amount_in_category(categorysCost)
    },
    countOperations: () => { 
        return count_operations_in_category(categorysCost)
    }
}
