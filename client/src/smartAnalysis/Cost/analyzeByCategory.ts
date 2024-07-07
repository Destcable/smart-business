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


export function analyzeCostByCategory() { 
    console.log(categorysCost)
}


