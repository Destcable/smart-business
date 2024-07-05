import getProjectList from "@entities/project/api/getProjectList";
import { ProjectCard } from "@entities/project/ui/ProjectCard";
import { Button } from "@fluentui/react-components";
import { AddRegular } from "@fluentui/react-icons";
import Title from "@shared/ui/Title/Title"
import { useState } from "react";

const ProjectDataList = () => {
    const [data, setData] = useState([]);

    getProjectList().then((project) => setData(project));

    return <>
        <Title>Проекты: Просмотр данных</Title>
        <Button appearance="primary" icon={<AddRegular />}>Добавить</Button>
        {data.length > 0 && data.map((project: any, index) => { 
            return <ProjectCard key={index} name={project.name} />
        })}
    </> 
};

export default ProjectDataList;