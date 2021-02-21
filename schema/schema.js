const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

const movies = [
  {id: '1', name: 'The Shawshank Redemption', genre: 'Drama'},
  {id: '2', name: 'The Green Mile', genre: 'Criminal'},
  {id: '3', name: 'The Lord of the Rings: The Return of the King', genre: 'fantasy'},
  {id: '4', name: 'Interstellar', genre: 'Science-fiction'},
]

const MovieType = new GraphQLObjectType({
  name: "Movie",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
  }),
});

const Query = new GraphQLObjectType({
  name: "Query",
  fields: {
    movie: {
      type: MovieType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {

      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: Query,
});
