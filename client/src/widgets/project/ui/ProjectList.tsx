import getProjectList from "@entities/project/api/getProjectList";
import { useState } from "react";
import ProjectCard from "@features/projectData/ui/ProjectCard";

const ProjectList = () => {
    const [data, setData] = useState([]);

    getProjectList().then((test) => {
        setData(test)
    });

    if (data.length > 0) {
        return data.map((project: any, index) => {
            return <ProjectCard key={index} name={project.name} />
        })

    }

};

export default ProjectList;