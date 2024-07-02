import { Button } from "@fluentui/react-components";
import { AddRegular } from "@fluentui/react-icons";
import Title from "@shared/ui/Title/Title";
import CostList from "@widgets/cost/ui/CostList";

const CostDataList = () => { 
    return <>
        <Title>Расходы: Просмотр данных</Title>
        <Button appearance="primary" icon={<AddRegular />}>Добавить</Button>
        <CostList />
    </>
};

export default CostDataList;