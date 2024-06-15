import { atom } from "@mongez/react-atom";

export type Task = {
  text: string;
  checked: boolean;
};

const loadTasks = (): Task[] => {
  const tasks = localStorage.getItem('tasks');
  return tasks ? JSON.parse(tasks) : [];
};

export const tasksAtom = atom<Task[]>({
  key: 'tasks',
  default: loadTasks(),
});

export const editIndexAtom = atom<number | null>({
  key: 'editIndex',
  default: null,
});
