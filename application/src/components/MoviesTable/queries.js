import { gql } from 'apollo-boost';

const moviesQuery = gql`
  query moviesQuery($name: String) {
    movies(name: $name) {
      id
      name
      genre
      watched
      rate
      directorId {
        name
        id
      }
    }
  }
`;

export default moviesQuery;
