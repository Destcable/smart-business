import getCostList from "@entities/cost/api/getCostList";
import CostTable from "@features/costData/ui/CostTable";
import renderTableBodyOfColumns from "@shared/utils/renderTableBodyOfColumns";
import { useState } from "react";

const columns = [
    { columnKey: "dateCost", label: "dateCost" },
    { columnKey: "amount", label: "amount"}
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