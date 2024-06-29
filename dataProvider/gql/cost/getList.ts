import { gql } from "@apollo/client";

export const getList = gql`
query getListCost {
  items: getListCost {
    id
    description
    amount
    category {
      id
      for
      name
    }
    counterparty {
      id
      name
    }
    dateCost
    project {
      id
      name
    }
  }
}
`;