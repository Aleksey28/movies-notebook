const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLInt } = graphql;

const movies = [
  { id: 1, name: "The Shawshank Redemption", genre: "Drama" },
  { id: 2, name: "The Green Mile", genre: "Criminal" },
  { id: 3, name: "The Lord of the Rings: The Return of the King", genre: "fantasy" },
  { id: 4, name: "Interstellar", genre: "Science-fiction" },
];

const directors = [
  { id: 1, name: "Frank Darabont", age: 62 },
  { id: 2, name: "Peter Jackson", age: 59 },
  { id: 3, name: "Christopher Nolan", age: 50 },
];

const MovieType = new GraphQLObjectType({
  name: "Movie",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
  }),
});

const DirectorsType = new GraphQLObjectType({
  name: "Director",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
  }),
});

const Query = new GraphQLObjectType({
  name: "Query",
  fields: {
    movie: {
      type: MovieType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return movies.find(movie => movie.id == args.id);
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: Query,
});
