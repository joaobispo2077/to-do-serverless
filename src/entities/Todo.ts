import { v4 as uuid } from 'uuid';

class Todo {
  id: string;
  user_id: string;
  title: string;
  done: boolean;
  deadline: string;

  constructor(todo: Partial<Todo>) {
    this.id = todo.id || uuid();

    this.user_id = todo.user_id;
    this.title = todo.title;
    this.deadline = todo.deadline;
    this.done = todo.done;
  }
}

export { Todo };
