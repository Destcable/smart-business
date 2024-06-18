import { gql } from "@apollo/client";

export const getList = gql`
query getListCost {
  items: getListCost {
    amount
    category
    counterparty
    dateCost
    description
    id
    project
  }
}
`;