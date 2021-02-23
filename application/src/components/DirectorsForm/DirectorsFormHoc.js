import { withStyles } from '@material-ui/core/styles';
import { compose } from 'recompose';
import { graphql } from 'react-apollo';

import addDirectorMutation from './mutation';

import styles from './styles';

const withGraphqlAdd = graphql(addDirectorMutation, {
  props: ({ mutate }) => ({
    addDirector: (director) => mutate({
      variable: director,
    }),
  }),
});

export default compose(withStyles(styles), withGraphqlAdd);
