import getCostList from "@entities/cost/api/getCostList";
import { Button } from "@fluentui/react-components";
import { AddRegular } from "@fluentui/react-icons";
import Table from "@shared/ui/Table/Table";
import TableBody from "@shared/ui/Table/TableBody";
import Title from "@shared/ui/Title/Title";
import { useState } from "react";

const columns = [
    { columnKey: "dateCost", label: "Дата транзакции" },
    { columnKey: "category.name", label: "Категория" },
    { columnKey: "counterparty.name", label: "Контрагент" },
    { columnKey: "project.name", label: "Проект" },
    { columnKey: "amount", label: "Сумма" },
    { columnKey: "description", label: "Описание" }
];

const CostDataList = () => {
    const [data, setData] = useState<any>(null);

    getCostList().then((cost) => setData(cost));

    return <>
        <Title>Таблица: Расходы</Title>
        <p>Таблица Расходы: предназначена для управления данными
            о расходах компании. Она предоставляет пользователям возможность
            просматривать, фильтровать, сортировать, редактировать и добавлять
            новые записи о расходах.</p>
        <Button appearance="primary" icon={<AddRegular />}>Добавить</Button>
        {data &&
            <Table columns={columns}>
                <TableBody columns={columns} data={data} />
            </Table>
        }
    </>
};

export default CostDataList;