import getCostCategorySettingsList from "@entities/cost/api/getCostCategorySettingsList";
import { Button } from "@fluentui/react-components";
import { AddRegular } from "@fluentui/react-icons";
import Table from "@shared/ui/Table/Table";
import TableBody from "@shared/ui/Table/TableBody";
import Title from "@shared/ui/Title/Title"
import { useState } from "react";
import { CostSettingsCategoryCreate } from "../Create/CostSettingsCategoryCreate";

const columns = [
    { columnKey: "name", label: "Наименование" },
];

export const CostSettingsCategoryList = () => {
    const [dataCategory, setDataCategory] = useState<any>(null);

    getCostCategorySettingsList().then(cost => setDataCategory(cost));

    return <>
        <Title>Расходы: Категории</Title>
        {dataCategory &&
            <>

                <CostSettingsCategoryCreate
                    button={
                        <Button appearance="primary" icon={<AddRegular />}>Добавить</Button>
                    }
                />
                <Table columns={columns}>
                    <TableBody columns={columns} data={dataCategory} />
                </Table>
            </>
        }
    </>
} 
