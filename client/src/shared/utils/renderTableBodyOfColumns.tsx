import { TableCell, TableRow, TableSelectionCell } from "@fluentui/react-components";

const renderTableBodyOfColumns = (columns: any, data: any,) => {
    return ( data.map((item: any, index: number) => (
                <TableRow key={index}>
                    <TableSelectionCell
                        checkboxIndicator={{ "aria-label": "Select row" }}
                    />
                    {columns.map((column: any) => (
                        <TableCell key={column.columnKey}>
                            {item[column.columnKey]}
                        </TableCell>
                    ))}
                </TableRow>
            ))
    );
};

export default renderTableBodyOfColumns;