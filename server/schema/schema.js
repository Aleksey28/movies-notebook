const graphql = require('graphql');

const {
  GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLInt, GraphQLList,
} = graphql;

const movies = [
  {
    id: 1, name: 'The Shawshank Redemption', genre: 'Drama', directorId: 1,
  },
  {
    id: 2, name: 'The Green Mile', genre: 'Criminal', directorId: 1,
  },
  {
    id: 3, name: 'The Lord of the Rings: The Return of the King', genre: 'fantasy', directorId: 2,
  },
  {
    id: 4, name: 'Interstellar', genre: 'Science-fiction', directorId: 3,
  },
];

const directors = [
  { id: 1, name: 'Frank Darabont', age: 62 },
  { id: 2, name: 'Peter Jackson', age: 59 },
  { id: 3, name: 'Christopher Nolan', age: 50 },
];

const MovieType = new GraphQLObjectType({
  name: 'Movie',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    directorId: {
      type: DirectorsType,
      resolve(parent, args) {
        return directors.find((director) => director.id === parent.id);
      },
    },
  }),
});

const DirectorsType = new GraphQLObjectType({
  name: 'Director',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    movies: {
      type: new GraphQLList(MovieType),
      resolve(parent, args) {
        return movies.filter((movie) => movie.directorId === parent.id);
      },
    },
  }),
});

const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    movie: {
      type: MovieType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return movies.find((movie) => movie.id == args.id);
      },
    },
    director: {
      type: DirectorsType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return directors.find((director) => director.id == args.id);
      },
    },
    movies: {
      type: new GraphQLList(MovieType),
      resolve(parent, args_) {
        return movies;
      },
    },
    directors: {
      type: new GraphQLList(DirectorsType),
      resolve(parent, args_) {
        return directors;
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: Query,
});
