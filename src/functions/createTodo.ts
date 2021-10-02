import { TodoRepositories } from 'src/repositories/TodoRepositories';
import { TodoServices } from 'src/services/TodoServices';

type TodoEventBody = {
  title: string;
  deadline: string;
};

type TodoPathParameters = {
  user_id: string;
};

export const handler = async (event, context, callback) => {
  try {
    const { title, deadline } = JSON.parse(event.body) as TodoEventBody;
    const { user_id } = event.pathParameters as TodoPathParameters;

    const todoRepositories = new TodoRepositories();
    const todoServices = new TodoServices(todoRepositories);

    const todo = await todoServices.create({
      user_id,
      title,
      deadline,
    });

    return {
      statusCode: 200,
      body: JSON.stringify(todo),
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
