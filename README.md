# serverless offline setup

## Prerequisites
- Serverless offline plugin
- Serverless dynamodb local

## Command
- sls offline start (This will start the dynamo local and run the migration and seed file if available)

## Ports 
- Dynamodb local starts at [http://localhost:8000/shell]
- GraphQL server starts at [http://localhost:3000]

## Sending POST request to GRAPHQL endpoint
```
curl -XPOST -H "Content-Type: application/json" http://localhost:3000/graphql --data '{"query": "query {todos {id, task}}"}'
```
This command will be used for both queries and mutation

## Available Queries 
- getTodoById
- todos
- users
- getUserById 


## Available Mutation
- createTodo
- createUser


## Running Query and mutation

### Query example

```
query {
  users {
    firstName
    lastName
    email
  }
}
```


### Mutation example

```
mutation {
  createTodo(input: {
    id: "3alsdasdl2i-3o4djksa",
    task:"get milk",
    isCompleted:true
  }) {
    task
  }
}
```
Mutation and queries can be added and can be extended by making changes in schema and resolver files. 


## Deploy Command 
- sls deploy

The deployment will give the graphQL endpoint which frontend can consume by making use of apollo-angular or something like that. 