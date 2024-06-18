import queryClient from "../queryClient";
import { ICreateParams } from "./interfaces";
import { 
    create as ONE_COST_CREATE 
} from "../gql/cost";

const create = (resource: string, params: ICreateParams) => { 
    let mutation: any;
    
    switch (resource) { 
        case 'costs':
            mutation = ONE_COST_CREATE;
            break; 
    }

    return queryClient
    .mutate({
        mutation: mutation,
        variables: { input: params.data},
    })
    .then(data => { 
        return { data: data.data.item, id: data.data.item.id } } );

};

export default create;