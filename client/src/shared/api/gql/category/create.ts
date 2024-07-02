import { gql } from "@apollo/client";

export const create = gql`
mutation createCategory($input: CategoryCreateInput!) {
  item: createCategory(input: $input) {
    id
    name
    for
  }
}
`;