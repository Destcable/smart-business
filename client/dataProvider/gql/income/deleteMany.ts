import { gql } from "@apollo/client";

export const deleteMany = gql`
    mutation deleteManyIncome($ids: [Int]!) {
        item: deleteManyIncome(ids: $ids) {
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
            dateIncome
            project {
                id
                name
            }
        }
    }
`;