import api from "@shared/api";

export function createCostCategorySettings(data: any) { 
    return api('cost/category').create(data);
}