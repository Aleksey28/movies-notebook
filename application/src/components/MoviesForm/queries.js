import { gql } from 'apollo-boost';

const directorsQuery = gql`
  query directorsQuery {
    directors {
      id
      name
    }
  }
`;

export default directorsQuery;
