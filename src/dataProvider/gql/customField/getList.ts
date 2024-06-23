import { gql } from "@apollo/client";

export const getList = gql`
query getListCustomField {
  items: getListCustomField {
    id
    for
    name
    type
    isRequired
  }
}
`;