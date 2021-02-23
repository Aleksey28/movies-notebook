import { gql } from 'apollo-boost';

const deleteDirectorMutation = gql`
  mutation deleteDirector($id: ID) {
    deleteDirector(id: $id) {
      id
    }
  }
`;

export default deleteDirectorMutation;
