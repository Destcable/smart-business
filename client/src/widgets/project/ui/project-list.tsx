import getProjectList from "@entities/project/api/getProjectList";
import ProjectCard from "@entities/project/ui/ProjectCard";
import { useState } from "react";

const ProjectList = () => {
    const [data, setData] = useState([]);

    getProjectList().then((test) => {
        setData(test)
    });

    if (data.length > 0) {
        return data.map(() => {
            return <ProjectCard />
        })

    }

};

export default ProjectList;