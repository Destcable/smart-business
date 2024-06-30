import { gql } from "@apollo/client";

export const getList = gql`
query getListCategory {
  items: getListCategory {
    for
    id
    name
  }
}
`;