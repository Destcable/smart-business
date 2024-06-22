import queryClient from "../queryClient";
import { 
    getMany as GET_MANY_CATEGORY
} from "../gql/category";

const getMany = (resource: string, params: any) => { 
    let query: any;

    switch (resource) {
        case 'costs/categories':
            query = GET_MANY_CATEGORY
            break;
    }
    
    return queryClient.query({
        query: query,
        variables: { ids: params.ids }
    }).then(data => {
        return {data: data.data.data }
    });

};
export default getMany;