import { gql } from 'apollo-boost';

const addDirectorMutation = gql`
  mutation addDirector($name: String!, $age: Int!) {
    addDirector(name: $name, age: $age) {
      name
    }
  }
`;

export default addDirectorMutation;
