import React, { createContext, useState } from "react";
import useTheme from "../hooks/useTheme";

import ThemeProvider from "../theme";
import { AppProps, ITask } from "../interfaces/context";

export const AppContext = createContext<AppProps | null>(null);

export const ContextProvider: React.FC<any> = ({ children }) => {
  const [theme, switchTheme] = useTheme();
  const [tasks, setTasks] = useState<ITask[]>([]);

  const saveTask = (task: ITask): boolean => {
    if (task) {
      setTasks((prev) => [...prev, task]);
      return true;
    }

    return false;
  };

  const deleteTask = (taskId: number): boolean => {
    if (taskId) {
      const updatedTaskList = tasks.filter((task) => task.id != taskId);
      setTasks(updatedTaskList);
      return true;
    }

    return false;
  };

  const valueMapped = {
    theme,
    switchTheme,
    tasks,
    saveTask,
    deleteTask,
  };

  return (
    <AppContext.Provider value={valueMapped}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </AppContext.Provider>
  );
};
