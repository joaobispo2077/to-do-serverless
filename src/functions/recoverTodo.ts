import { APIGatewayProxyHandler, APIGatewayProxyResult } from 'aws-lambda';
import { TodoRepositories } from 'src/repositories/TodoRepositories';
import { TodoServices } from 'src/services/TodoServices';

export const handler: APIGatewayProxyHandler = async (
  event,
  context,
  callback,
): Promise<APIGatewayProxyResult> => {
  try {
    const { user_id } = event.pathParameters;
    const todoRepositories = new TodoRepositories();
    const todoServices = new TodoServices(todoRepositories);

    const todos = await todoServices.findAllByUserId(user_id);

    return {
      statusCode: 200,
      body: JSON.stringify(todos),
    };
  } catch (error) {
    console.error('@@ERROR STACK', error);
    console.error('@@ NAME', error.name);
    console.error('@@ERROR MESSAGE', error.message);

    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Something went wrong!' }),
    };
  }
};
