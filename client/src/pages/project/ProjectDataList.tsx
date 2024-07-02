import { Button } from "@fluentui/react-components";
import { AddRegular } from "@fluentui/react-icons";
import Title from "@shared/ui/Title/Title";
import ProjectList from "@widgets/project/ui/project-list";

const ProjectDataList = () => { 
    return ( <> 
        <Title>Проекты: Просмотр данных</Title>
        <Button appearance="primary" icon={<AddRegular />}>Добавить</Button>
        <ProjectList />
    </> 
    )
};

export default ProjectDataList;