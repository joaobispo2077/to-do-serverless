export interface ICreateTodoDTO {
  title: string;
  user_id: string;
  deadline: string;
  done?: boolean;
}
