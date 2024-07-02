import getCostList from "@entities/cost/api/getCostList";
import Table from "@shared/ui/Table/Table";
import TableBody from "@shared/ui/Table/TableBody";
import { useState } from "react";

const columns = [
    { columnKey: "dateCost", label: "Дата транзакции" },
    { columnKey: "category.name", label: "Категория"},
    { columnKey: "counterparty.name", label: "Контрагент"},
    { columnKey: "project.name", label: "Проект"},
    { columnKey: "amount", label: "Сумма"},
    { columnKey: "description", label: "Описание"}
];

const CostDataTable = () => {
    const [data, setData] = useState<any>(null);

    getCostList().then((cost) => {
        setData(cost)
    });

    if (data) {
        return (
            <Table columns={columns}>
                <TableBody columns={columns} data={data}/>
            </Table>
        )
    }
};

export default CostDataTable;