const { gql } = require("apollo-server-lambda");

const globalSchema = gql`
    type Todo {
        task: String
        id: ID
        isCompleted: String
    }

    type User {
        id: ID
        firstName: String
        lastName: String
        email: String
    }

    type Query {
        getTodoById(id: ID!): [Todo]
        todos: [Todo],
        users: [User],
        getUserById(id: ID!): [User]
    }
  `;

  module.exports = globalSchema

