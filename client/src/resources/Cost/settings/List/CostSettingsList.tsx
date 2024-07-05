import getCostCategorySettingsList from "@entities/cost/api/getCostCategorySettingsList";
import Table from "@shared/ui/Table/Table";
import TableBody from "@shared/ui/Table/TableBody";
import Title from "@shared/ui/Title/Title";
import { useState } from "react";

const columns = [
    { columnKey: "name", label: "Наименование" },
];

const CostSettingsList = () => {
    const [dataCategory, setDataCategory] = useState<any>(null);

    getCostCategorySettingsList().then(cost => setDataCategory(cost));

    return <>
        <Title>Расходы: Категории</Title>
        {dataCategory &&
            <Table columns={columns}>
                <TableBody columns={columns} data={dataCategory} />
            </Table>
        }
    </>
};

export default CostSettingsList;