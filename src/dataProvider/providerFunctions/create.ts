import queryClient from "../queryClient";
import { ICreateParams } from "./interfaces";
import { create as ONE_COST_CREATE } from "../gql/cost";
import { create as ONE_CATEGORY_CREATE } from "../gql/category";
import { create as ONE_CUSTOM_FIELD_CREATE } from "../gql/customField";
import { create as ONE_COUNTERPARTY_CREATE } from "../gql/counterparty";

const create = (resource: string, params: ICreateParams) => { 
    let mutation: any;
    
    switch (resource) { 
        case 'costs/data':
            mutation = ONE_COST_CREATE;
            break; 
        case 'costs/categories':
            mutation = ONE_CATEGORY_CREATE;
            break;
        case 'costs/customFields':
            mutation = ONE_CUSTOM_FIELD_CREATE;
            break;
        case 'counterparty':
            mutation = ONE_COUNTERPARTY_CREATE;
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