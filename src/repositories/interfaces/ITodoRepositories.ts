import { ICreateTodoDTO } from 'src/dtos/ICreateTodoDTO';
import { Todo } from 'src/entities/Todo';

export interface ITodoRepositories {
  create({ title, deadline, user_id, done }: ICreateTodoDTO): Promise<Todo>;
  getByUserId(userId: string): Promise<Todo[]>;
}
