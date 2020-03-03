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

## Screenshot
![GraphQL Playground]("https://raw.githubusercontent.com/marleysidapple/local-serverless/master/Screen%20Shot%202020-03-03%20at%2012.12.11%20pm.png")


## Deploy Command 
- sls deploy

The deployment will give the graphQL endpoint which frontend can consume by making use of apollo-angular or something like that. 


## Improvement To Do
- Put query and mutation in its own file rather than having one big file. For e.g for users, have a query and mutation related to user in one file. 
