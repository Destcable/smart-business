import { gql } from "@apollo/client";

export const create = gql`
mutation createCounterparty($input: CounterpartyCreateInput!) {
  item: createCounterparty(input: $input) {
    id
    name
  }
}
`;