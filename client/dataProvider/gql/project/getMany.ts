import { gql } from "@apollo/client";

export const getMany = gql`
query GetManyProject($ids: [Int]!) {
  data: getManyProject(ids: $ids) {
    id
    name
  }
}
`;