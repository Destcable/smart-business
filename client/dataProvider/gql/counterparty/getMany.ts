import { gql } from "@apollo/client";

export const getMany = gql`
query GetManyCounterparty($ids: [Int]!) {
  data: getManyCounterparty(ids: $ids) {
    id
    name
  }
}
`;