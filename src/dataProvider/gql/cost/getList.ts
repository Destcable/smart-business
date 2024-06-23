import { gql } from "@apollo/client";

export const getList = gql`
query getListCost {
  items: getListCost {
    amount
    category {
      id
      for
      name
    }
    counterparty
    dateCost
    description
    id
    project
  }
}
`;