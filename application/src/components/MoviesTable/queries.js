import { gql } from 'apollo-boost';

const moviesQuery = gql`
  query moviesQuery {
    movies {
      id
      name
      genre
      watched
      rate
      directorId {
        name
      }
    }
  }
`;

export default moviesQuery;
