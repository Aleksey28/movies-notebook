import { gql } from 'apollo-boost';

const addDirectorMutation = gql`
  mutation addDirector($name: String!, $age: Int!) {
    addDirector(name: $name, age: $age) {
      name
    }
  }
`;

const updateDirectorMutation = gql`
  mutation updateDirector($id: ID, $name: String!, $age: Int!) {
    updateDirector(id: $id, name: $name, age: $age) {
      name
    }
  }
`;

export { addDirectorMutation, updateDirectorMutation };
