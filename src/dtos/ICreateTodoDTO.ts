export interface ICreateTodoDTO {
  title: string;
  user_id: string;
  deadline: Date;
  done?: boolean;
}
