import { TableCell, TableRow, TableSelectionCell } from "@fluentui/react-components";
import getNestedValue from "./getNestedValue";

const renderTableBodyOfColumns = (columns: any, data: any,) => {
    return ( data.map((item: any, index: number) => {
                return <TableRow key={index}>
                    <TableSelectionCell
                        checkboxIndicator={{ "aria-label": "Select row" }}
                    />
                    {columns.map((column: any) => (
                        <TableCell key={column.columnKey}>
                            {getNestedValue(item, column.columnKey)}
                        </TableCell>
                    ))}
                </TableRow>
            })
    );
};

export default renderTableBodyOfColumns;