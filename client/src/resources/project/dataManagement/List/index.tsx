import { Button, Table, TableBody, TableCell, TableHeader, TableHeaderCell, TableRow, TableSelectionCell } from "@fluentui/react-components";
import { AddRegular } from "@fluentui/react-icons";
import api from "@services/api";
import React, { useEffect, useState } from "react";

const columns = [
    { columnKey: "name", label: "Name" },
];

const ProjectDataManagementList: React.FC = () => {
    const [data, setData] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api('project/data').getList();
                setData(response);
            } catch (err) {
                console.error(err);
                setError('Error fetching data');
            }
        };

        fetchData();
    }, []);

    if (error) {
        return <div>{error}</div>;
    }

    if (data) {
        return <>
            <Button appearance="primary" icon={<AddRegular />}>Добавить</Button>
            <Table arial-label="Default table" style={{ tableLayout: "auto" }}>
                <TableHeader>
                    <TableRow>
                        <TableSelectionCell
                            checked={
                                true
                            }
                            // onClick={() => console.log(1)}
                            // onKeyDown={() => {}}
                            checkboxIndicator={{ "aria-label": "Select all rows " }}
                        />
                        {columns.map((column) => (
                            <TableHeaderCell key={column.columnKey}>
                                {column.label}
                            </TableHeaderCell>
                        ))}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data.map((item: any) => {
                        console.log(item);
                        return (
                            <TableRow key={item.name}>
                                <TableSelectionCell
                                    // checked={selected}
                                    checkboxIndicator={{ "aria-label": "Select row" }}
                                />
                                <TableCell>
                                    {item.name}
                                </TableCell>
                            </TableRow>
                        )
                    }
                    )}
                </TableBody>

            </Table>
        </>

    }
};

export default ProjectDataManagementList;