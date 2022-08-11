import { ThemeProps } from "./theme";

export interface ITask {
  id: number;
  title: string;
  description: string;
  createdAt: string;
  priority: number;
  status: boolean;
}

export type AppProps = {
  theme: ThemeProps;
  tasks: ITask[];
  saveTask: (task: ITask) => boolean;
  deleteTask: (taskId: number) => boolean;
};
