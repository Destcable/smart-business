import { buildQuery } from 'ra-data-graphql-simple';
import buildGraphQLProvider from 'ra-data-graphql-simple';
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const client = new ApolloClient({
    link: new HttpLink({ uri: 'https://your-graphql-endpoint.com/graphql' }),
    cache: new InMemoryCache(),
});

const customBuildQuery = buildQuery;

const dataProvider = buildGraphQLProvider({ client: client as ApolloClient<any>, buildQuery: customBuildQuery });

export default dataProvider;
