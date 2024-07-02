import { gql } from "@apollo/client";

export const getList = gql`
query GetListProject {
  items: getListProject {
    id
    name
  }
}
`;