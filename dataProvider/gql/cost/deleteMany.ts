import { gql } from "@apollo/client";

export const deleteMany = gql`
    mutation deleteManyCost($ids: [Int]!) {
        item: deleteManyCost(ids: $ids) {
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
            counterparty
            description
            id
            project
            dateCost
        }
    }
`;