import {applySnapshot} from 'mobx-state-tree';
import {todosStoreType} from '.';
import {StoreType} from '..';

export function todosAction({todos}: StoreType) {
  function setTasks(task: todosStoreType) {
    const existsTask = todos.get(task._id);
    if (existsTask) {
      return applySnapshot(existsTask, task); // applySnapshot is used for assign changes
    }
    todos.set(task._id, task);
  }
  function deleteTask(taskId: string) {
    todos.delete(taskId);
  }
  function addTasks(task: todosStoreType[]) {
    task.forEach((snapshot): void => setTasks(snapshot));
  }
  return {addTasks, setTasks, deleteTask};
}
