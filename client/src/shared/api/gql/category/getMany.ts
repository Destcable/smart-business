import { gql } from "@apollo/client";

export const getMany = gql`
query GetManyCategory($ids: [Int]!) {
  data: getManyCategory(ids: $ids) {
    id
    for
    name
  }
}
`;