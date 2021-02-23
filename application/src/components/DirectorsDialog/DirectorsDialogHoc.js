import { compose } from 'recompose';
import { graphql } from 'react-apollo';
import deleteDirectorMutation from './mutation';
import directorsQuery from '../DirectorsTable/queries';

const widthGraphqlDelete = graphql(deleteDirectorMutation, {
  props: ({ mutate }) => ({
    deleteDirector: (director) => mutate({
      variables: director,
      refetchQueries: [{ query: directorsQuery }],
    }),
  }),
});

export default compose(widthGraphqlDelete);
