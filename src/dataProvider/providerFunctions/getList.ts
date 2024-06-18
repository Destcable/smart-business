import queryClient from "../queryClient";
import parseData from "../parseData";
import { 
    getList as GET_LIST_COST
} from "../gql/cost";

const getList = (resource: any) => {
    let query: any;

    switch (resource) {
        case 'costs': 
            query = GET_LIST_COST;
            break;
    }
    
    return queryClient.query({
        query: query,
        variables: {}
    }).then(data => ({ 
            data: data.data.items.map(parseData), 
            total: data.data.items.length 
        })
    );
};

export default getList;