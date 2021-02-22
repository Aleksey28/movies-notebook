import { gql } from 'apollo-boost';

const moviesQuery = gql`
  query moviesQuery {
    movies {
      id
      name
      genre
    }
  }
`;

export default moviesQuery;
