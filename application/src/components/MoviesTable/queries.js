import { gql } from 'apollo-boost';

const moviesQuery = gql`
  query moviesQuery {
    movie {
      id
      name
      genre
    }
  }
`;

export default moviesQuery;
