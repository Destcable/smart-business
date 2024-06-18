import { gql } from "@apollo/client";

export const create = gql`
    mutation CreateCost($input: CostCreateInput!) {
        item: createCost(input: $input) {
            amount
            category
            counterparty
            description
            dateCost
            id
            project
        }
    }
`;