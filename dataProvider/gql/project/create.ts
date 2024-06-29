import { gql } from "@apollo/client";

export const create = gql`
mutation CreateProject($input: ProjectCreateInput!) {
  item: createProject(input: $input) {
    id
    name
  }
}
`;