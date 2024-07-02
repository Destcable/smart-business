import apiClient from "./apiClient";
import { getList as GET_PROJECT_LIST } from "./gql/project"
import { getList as GET_COST_LIST } from "./gql/cost"

export default function api(resource: string) {
    return { 
        getList: async () => { 
            let query: any; 
            switch (resource) {
                case 'project/data':
                    query = GET_PROJECT_LIST;
                    break;
                case 'cost/data':
                    query = GET_COST_LIST;
                    break;
            }

            try {
                const { data } = await apiClient.query({
                    query: query,
                    variables: {}
                });
                
                if (!data || !data.items) {
                    throw new Error('Invalid response format');
                }

                return data.items
            } catch (error) {
                console.error('Error fetching data:', error);
                throw error;
            }

        }
    }
}