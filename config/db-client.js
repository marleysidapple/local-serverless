const { DynamoDB } = require('aws-sdk');

let dbClient = new DynamoDB.DocumentClient();

const DYNAMODB_PORT = process.env.LOCAL_DYNAMODB_PORT || 8000;
console.log('Running offline? ', process.env.IS_OFFLINE, '8000');

if (process.env.IS_OFFLINE) {
	dbClient = new DynamoDB.DocumentClient({
		region: 'localhost',
		endpoint: `http://localhost:8000`,
		accessKeyId: 'DEFAULT_ACCESS_KEY', // needed if you don't have aws credentials at all in env
		secretAccessKey: 'DEFAULT_SECRET'
	});
}

module.exports =  dbClient;