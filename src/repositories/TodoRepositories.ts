import { ICreateTodoDTO } from 'src/dtos/ICreateTodoDTO';
import { Todo } from 'src/entities/Todo';
import { dynamoddbClient } from 'src/utils/dynamodbClient';

import { ITodoRepositories } from './interfaces/ITodoRepositories';

class TodoRepositories implements ITodoRepositories {
  async create({
    title,
    deadline,
    user_id,
    done,
  }: ICreateTodoDTO): Promise<Todo> {
    const todo = new Todo({ title, deadline, user_id, done });

    await dynamoddbClient
      .put({
        TableName: process.env.TODO_TABLE_NAME,
        Item: todo,
      })
      .promise();

    return todo;
  }

  async getByUserId(userId: string): Promise<Todo[]> {
    const response = await dynamoddbClient
      .query({
        TableName: process.env.TODO_TABLE_NAME,
        KeyConditionExpression: 'user_id = :user_id',
        ExpressionAttributeValues: {
          ':user_id': userId,
        },
      })
      .promise();

    const todos = response.Items as Todo[];

    return todos;
  }
}

export { TodoRepositories };
