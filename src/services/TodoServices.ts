import { ICreateTodoDTO } from 'src/dtos/ICreateTodoDTO';
import { Todo } from 'src/entities/Todo';
import { ITodoRepositories } from 'src/repositories/interfaces/ITodoRepositories';

class TodoServices {
  constructor(private todosRepositories: ITodoRepositories) {}

  async create({ title, deadline, user_id }: ICreateTodoDTO): Promise<Todo> {
    const todo = {
      title,
      deadline,
      user_id,
      done: false,
    };

    const newTodo = this.todosRepositories.create(todo);

    return newTodo;
  }

  async findAllByUserId(userId: string): Promise<Todo[]> {
    const todos = await this.todosRepositories.getByUserId(userId);

    return todos;
  }
}

export { TodoServices };
