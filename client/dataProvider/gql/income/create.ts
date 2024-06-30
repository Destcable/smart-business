import { gql } from "@apollo/client";

export const create = gql`
    mutation CreateIncome($input: IncomeCreateInput!) {
        item: createIncome(input: $input) {
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