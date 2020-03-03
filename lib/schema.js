const { gql } = require("apollo-server-lambda");

const globalSchema = gql`
    type Todo {
        id: ID!
        task: String
        isCompleted: Boolean
    }

    type User {
        id: ID
        firstName: String
        lastName: String
        email: String
    }

    type Query {
        getTodoById(id: ID!): [Todo]
        todos: [Todo]
        users: [User]
        getUserById(id: ID!): [User]
    }

    input todoInput {
        id: ID!
        task: String
        isCompleted: Boolean
    }

    input userInput {
        id: ID!
        firstName: String
        lastName: String
        email: String
    }

    type Mutation {
        createTodo(input: todoInput): Todo!
        createUser(input: userInput): User!
    }

  `;

  module.exports = globalSchema

