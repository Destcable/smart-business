import getCostList from "@entities/cost/api/getCostList";
import CostTable from "@features/costData/ui/CostTable";
import renderTableBodyOfColumns from "@shared/utils/renderTableBodyOfColumns";
import { useState } from "react";

const columns = [
    { columnKey: "dateCost", label: "Дата транзакции" },
    { columnKey: "category.name", label: "Категория"},
    { columnKey: "counterparty.name", label: "Контрагент"},
    { columnKey: "project.name", label: "Проект"},
    { columnKey: "amount", label: "Сумма"},
    { columnKey: "description", label: "Описание"}
];

const CostList = () => {
    const [data, setData] = useState<any>(null);

    getCostList().then((cost) => {
        setData(cost)
    });

    if (data) {
        return (
            <CostTable columns={columns}>
                {renderTableBodyOfColumns(columns, data)}
            </CostTable>
        )
    }
};

export default CostList;