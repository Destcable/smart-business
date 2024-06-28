import { gql } from "@apollo/client";

export const getList = gql`
query getListCost {
  items: getListCost {
    amount
    category {
      for
      id
      name
    }
    counterparty {
      id
      name
    }
    dateCost
    description
    id
    project
  }
}
`;