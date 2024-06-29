import { gql } from "@apollo/client";

export const deleteMany = gql`
    mutation deleteManyCost($ids: [Int]!) {
        item: deleteManyCost(ids: $ids) {
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