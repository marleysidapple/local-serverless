const { ApolloServer } = require("apollo-server-lambda");
typeDefs = require("./lib/schema");
resolvers = require("./lib/resolvers");

// curl -XPOST -H "Content-Type: application/json" http://localhost:3000/graphql --data '{"query": "query {todos {id, task}}"}'

// Construct a schema, using GraphQL schema language
//const typeDefs = schemaDef
    

// Provide resolver functions for your schema fields
//const resolvers = resolver

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  introspection: true,
});

exports.graphqlHandler = server.createHandler();
