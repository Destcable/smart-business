import queryClient from "../queryClient";
import parseData from "../parseData";
import { 
    deleteMany as DELETE_MANY_COST
} from "../gql/cost";

const deleteMany = (resource: string, params: any) => {
    let mutation: any;

    switch (resource) {
        case 'costs':
            mutation = DELETE_MANY_COST;
            break;
    }
    
    return queryClient.mutate({
        mutation: mutation,
        variables: { ids: params.ids}
    }).then(data => ({ 
            data: data.data.item.map(parseData), 
            total: data.data.item.length 
        })
    );
};

export default deleteMany;