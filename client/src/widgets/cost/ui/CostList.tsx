import getCostList from "@entities/cost/api/getCostList";
import CostTable from "@features/costData/ui/CostTable";
import { TableCell, TableRow, TableSelectionCell } from "@fluentui/react-components";
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
                {data.map((item: any, index: number) => (
                    <TableRow key={index}>
                        <TableSelectionCell
                            // checked={selected}
                            checkboxIndicator={{ "aria-label": "Select row" }}
                        />
                        {columns.map((column: any) => (
                            <TableCell key={column.columnKey}>
                                {item[column.columnKey]}
                            </TableCell>
                        ))}
                    </TableRow>
                ))}
            </CostTable>
        )
    }
};

export default CostList;