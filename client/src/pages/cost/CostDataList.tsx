import { Button } from "@fluentui/react-components";
import { AddRegular } from "@fluentui/react-icons";
import Title from "@shared/ui/Title/Title";
import CostDataTable from "@widgets/cost/ui/CostDataTable";

const CostDataList = () => { 
    return <>
        <Title>Таблица: Расходы</Title>
        <p>Таблица Расходы: предназначена для управления данными 
            о расходах компании. Она предоставляет пользователям возможность 
            просматривать, фильтровать, сортировать, редактировать и добавлять
            новые записи о расходах.</p>
        <Button appearance="primary" icon={<AddRegular />}>Добавить</Button>
        <CostDataTable />
    </>
};

export default CostDataList;