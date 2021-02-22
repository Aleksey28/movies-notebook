import { gql } from 'apollo-boost';

const directorsQuery = gql`
  query directorsQuery {
    directors {
      id
      name
      age
      movies {
        name
        id
      }
    }
  }
`;

export default directorsQuery;
