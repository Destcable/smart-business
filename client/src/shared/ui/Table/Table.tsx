import { Table as TableFluentUi, TableBody, TableHeader, TableHeaderCell, TableRow, TableSelectionCell } from "@fluentui/react-components";
import { FC, ReactNode } from "react";

interface TableProps {
    columns: any
    children: ReactNode
}

const Table: FC<TableProps> = ({ columns, children }) => (
    <TableFluentUi arial-label="Default table" style={{ tableLayout: "auto" }}>
        <TableHeader>
            <TableRow>
                <TableSelectionCell
                    checked={true}
                    // onClick={() => console.log(1)}
                    // onKeyDown={() => {}}
                    checkboxIndicator={{ "aria-label": "Select all rows " }}
                />
                {columns.map((column: any) => (
                    <TableHeaderCell key={column.columnKey}>
                        {column.label}
                    </TableHeaderCell>
                ))}
            </TableRow>
        </TableHeader>
        <TableBody>
            {children}
        </TableBody>
    </TableFluentUi>
);

export default Table;