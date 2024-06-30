import queryClient from "../queryClient";
import parseData from "../parseData";
import { getList as GET_LIST_COST } from "../gql/cost";
import { getList as GET_LIST_CATEGORY } from "../gql/category";
import { getList as GET_LIST_CUSTOM_FIELD } from "../gql/customField";
import { getList as GET_LIST_COUNTERPARTY } from "../gql/counterparty";
import { getList as GET_LIST_PROJECT } from "../gql/project";
import { getList as GET_LIST_INCOME } from "../gql/income";

const getList = (resource: any) => {
    let query: any;

    switch (resource) {
        case 'costs/data': 
            query = GET_LIST_COST;
            break;
        case 'costs/categories':
            query = GET_LIST_CATEGORY;
            break;
        case 'costs/customFields':
            query = GET_LIST_CUSTOM_FIELD;
            break;
        case 'income/data': 
            query = GET_LIST_INCOME;
            break;
        case 'counterparty':
            query = GET_LIST_COUNTERPARTY;
            break;
        case 'project':
            query = GET_LIST_PROJECT;
            break;
    }
    
    return queryClient.query({
        query: query,
        variables: {}
    }).then(data => { 
            return {data: data.data.items.map(parseData), 
            total: data.data.items.length}
        }
    );
};

export default getList;