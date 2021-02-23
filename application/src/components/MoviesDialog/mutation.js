import { gql } from 'apollo-boost';

const deleteMovieMutation = gql`
  mutation deleteMovie($id: ID) {
    deleteMovie(id: $id) {
      id
    }
  }
`;

export default deleteMovieMutation;
