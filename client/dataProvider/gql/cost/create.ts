import { gql } from "@apollo/client";

export const create = gql`
    mutation CreateCost($input: CostCreateInput!) {
        item: createCost(input: $input) {
          id
          description
          amount
          category {
            id
            for
            name
          }
          counterparty {
            id
            name
          }
          dateCost
          project {
            id
            name
          }
        }
    }
`;