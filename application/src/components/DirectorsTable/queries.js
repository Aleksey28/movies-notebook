import { gql } from 'apollo-boost';

const directorsQuery = gql`
  query directorsQuery($name: String) {
    directors(name: $name) {
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
