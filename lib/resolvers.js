var Promise = require("bluebird"),
  db = require("./../database/dynamodb");

const resolvers = {
  Query: {
    todos: () => {
      return db("scan", {
        TableName: "dev" + "-todos"
      }).then(todo => {
        return todo.Items;
      });
    },

    users: () => {
      return db("scan", {
        TableName: "dev" + "-user"
      }).then(user => {
        return user.Items;
      });
    },

    getTodoById: (parent, args, ctx, info) => {
      return db("query", {
        TableName: "dev" + "-todos",
        KeyConditionExpression: "#id = :id",
        ExpressionAttributeValues: {
          ":id": args.id
        },
        ExpressionAttributeNames: {
          "#id": "id"
        }
      }).then(todo => {
        return todo.Items;
      });
    },
  
    getUserById: (parent, args, ctx, info) => {
      return db("query", {
        TableName: "dev" + "-user",
        KeyConditionExpression: "#id = :id",
        ExpressionAttributeValues: {
          ":id": args.id
        },
        ExpressionAttributeNames: {
          "#id": "id"
        }
      }).then(user => {
        return user.Items;
      });
    }
  },


  Mutation: {
    createTodo: (parent, args, ctx, info) => {
      return db("put", {
        TableName: "dev" + "-todos",
        Item: {
          id: args.input.id,
          task: args.input.task,
          isCompleted: args.input.isCompleted
        }
        
      }).then(() => {
        return args.input;
      })

    },

    createUser: (parent, args, ctx, info) => {
      return db("put", {
        TableName: "dev" + "-user",
        Item: {
          id: args.input.id,
          firstName: args.input.firstName,
          lastName: args.input.lastName,
          email: args.input.email
        }
        
      }).then(() => {
        return args.input;
      })

    },
  }


};

module.exports = resolvers;
