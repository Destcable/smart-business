import { gql } from "@apollo/client";

export const create = gql`
    mutation CreateCustomField($input: CustomFieldCreateInput!) {
        item: createCustomField(input: $input) {
            id
            for
            name
            type
            isRequired
        }
    }
`;    