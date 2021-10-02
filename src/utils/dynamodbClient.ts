import { DynamoDB } from 'aws-sdk';

const { IS_OFFLINE } = process.env;

const offlineOptions = {
  region: 'localhost',
  endpoint: 'http://localhost:8080',
};

export const dynamoddbClient = IS_OFFLINE
  ? new DynamoDB.DocumentClient(offlineOptions)
  : new DynamoDB.DocumentClient();
