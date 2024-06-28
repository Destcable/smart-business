import { gql } from "@apollo/client";

export const getList = gql`
query getListCounterparty {
  items: getListCounterparty {
    id
    name
  }
}
`;