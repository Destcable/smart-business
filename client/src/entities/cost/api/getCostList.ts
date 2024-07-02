import api from "@shared/api";

export default function getCostList() { 
    return api('cost/data').getList();
}