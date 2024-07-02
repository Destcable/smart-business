import apiClient from "./apiClient";
import { getList } from "./gql/project"

export default function api(resource: string) {
    return { 
        getList: async () => { 
            let query: any; 
            switch (resource) {
                case 'project/data':
                    query = getList 
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