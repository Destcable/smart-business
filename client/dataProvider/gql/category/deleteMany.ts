import { gql } from "@apollo/client";

export const deleteMany = gql`
mutation deleteManyCategory($ids: [Int]!) {
  item: deleteManyCategory(ids: $ids) {
    for
    name
    id
  }
}
`;