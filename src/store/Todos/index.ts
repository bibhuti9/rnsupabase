import {Instance, SnapshotIn, types} from 'mobx-state-tree';

export const todo = types.model('todosStore', {
  _id: types.string,
  title: types.string,
  description: types.string,
  icon: types.string,
  done: types.boolean,
});

export const todoStore = types.map(todo);

export type todosSnapShot = SnapshotIn<typeof todo>;
export type todosStoreType = Instance<typeof todo>;
