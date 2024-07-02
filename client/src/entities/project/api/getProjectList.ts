import api from "@shared/api";

export default function getProjectList() { 
    return api('project/data').getList();

}