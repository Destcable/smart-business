import queryClient from "../queryClient";
import { getMany as GET_MANY_CATEGORY } from "../gql/category";
import { getMany as GET_MANY_COUNTERPARTY } from "../gql/counterparty";

const getMany = (resource: string, params: any) => { 
    let query: any;

    switch (resource) {
        case 'costs/categories':
            query = GET_MANY_CATEGORY
            break;
        case 'counterparty': 
            query = GET_MANY_COUNTERPARTY;
            break;
    }
    
    return queryClient.query({
        query: query,
        variables: { 
            ids: params.ids.map(id => id.id || id)
        }
        // variables: { ids: params.ids }
    }).then(data => {
        const formattedData = data.data.data.map((item, index) => ({ ...item, id: params.ids[index] }));
        return { data: formattedData };
    });

};
export default getMany;