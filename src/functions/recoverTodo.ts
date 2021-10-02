import { APIGatewayProxyHandler, APIGatewayProxyResult } from 'aws-lambda';

export const handler: APIGatewayProxyHandler = async (
  event,
  context,
  callback,
): Promise<APIGatewayProxyResult> => {
  console.info('context is', context);

  callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
    }),
  });
  return;
};
