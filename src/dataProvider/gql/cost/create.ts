import { gql } from "@apollo/client";

export const create = gql`
    mutation CreateCost($input: CostCreateInput!) {
        item: createCost(input: $input) {
    amount
    category {
      for
      id
      name
    }
    counterparty {
      id
      name
    }
    dateCost
    description
    id
    project
        }
    }
`;