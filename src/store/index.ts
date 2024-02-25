import {Instance, types} from 'mobx-state-tree';
import {todoFormStore} from './TodoForm';
import {todoFormAction} from './TodoForm/action';
import {getTodoFormState} from './TodoForm/default';
import {deviceStore} from './Device';
import {loaderAction} from './Device/action';
import {getDeviceDefaultState} from './Device/default';
import {todoStore, todosStoreType} from './Todos';
import {todosAction} from './Todos/action';

export const Store = types
  .model('rootStore', {
    todoForm: todoFormStore,
    device: deviceStore,
    todos: todoStore,
  })
  .actions(todoFormAction)
  .actions(loaderAction)
  .actions(todosAction)
  .actions(store => ({
    checkTodoFormId(todoId: string): boolean {
      return store.todos.get(todoId) !== undefined;
    },
  }))
  .views(store => ({
    get isLoading(): boolean {
      return store.device.isLoading;
    },
    get getTasks(): todosStoreType[] {
      return Array.from<todosStoreType>(store.todos.values());
    },
    get unDoneTask(): todosStoreType[] {
      return Array.from<todosStoreType>(store.todos.values()).filter(
        task => !task.done,
      );
    },
    get doneTask(): todosStoreType[] {
      return Array.from<todosStoreType>(store.todos.values()).filter(
        task => task.done,
      );
    },
  }));

export type StoreType = Instance<typeof Store>;
export const store = Store.create({
  todoForm: getTodoFormState(),
  device: getDeviceDefaultState(),
});
