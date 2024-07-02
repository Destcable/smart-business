import { FC } from "react";
import renderTableBodyOfColumns from "@shared/utils/renderTableBodyOfColumns";

interface TableBodyProps { 
    columns: any
    data: any
}

const TableBody: FC<TableBodyProps> = ({ columns, data }) => { 
    return renderTableBodyOfColumns(columns, data);
};

export default TableBody;