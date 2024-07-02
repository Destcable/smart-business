import api from "@shared/api";

export default function getCostCategorySettingsList() { 
    return api('cost/category').getList();
}