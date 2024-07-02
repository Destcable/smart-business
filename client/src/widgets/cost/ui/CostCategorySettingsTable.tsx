import getCostCategorySettingsList from "@entities/cost/api/getCostCategorySettingsList";
import Table from "@shared/ui/Table/Table";
import TableBody from "@shared/ui/Table/TableBody";
import { useState } from "react";

const columns = [
    { columnKey: "name", label: "Наименование" },
];

const CostCategorySettingsTable = () => { 
    const [data, setData] = useState<any>(null);

    getCostCategorySettingsList().then((cost) => {
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

export default CostCategorySettingsTable;