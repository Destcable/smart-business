import queryClient from "../queryClient";
import parseData from "../parseData";
import { 
    getList as GET_LIST_COST
} from "../gql/cost";
import { 
    getList as GET_LIST_CATEGORY
} from "../gql/category";

const getList = (resource: any) => {
    let query: any;

    switch (resource) {
        case 'costs/data': 
            query = GET_LIST_COST;
            break;
        case 'costs/categories':
            query = GET_LIST_CATEGORY;
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