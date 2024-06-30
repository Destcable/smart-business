import { gql } from "@apollo/client";

export const getList = gql`
query getListIncome {
  items: getListIncome {
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
    dateIncome
    project {
      id
      name
    }
  }
}
`;