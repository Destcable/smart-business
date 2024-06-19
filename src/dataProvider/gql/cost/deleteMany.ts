import { gql } from "@apollo/client";

export const deleteMany = gql`
    mutation deleteManyCost($ids: [Int]!) {
        item: deleteManyCost(ids: $ids) {
            amount
            category
            counterparty
            description
            id
            project
            dateCost
        }
    }
`;