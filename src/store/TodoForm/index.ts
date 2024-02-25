import {Instance, SnapshotIn, types} from 'mobx-state-tree';

export const todoForms = types.model('todoFormStore', {
  _id: types.string,
  title: types.string,
  description: types.string,
  icon: types.string,
  done: types.boolean,
});

export const todoFormStore = todoForms;

export type todoFormSnapShot = SnapshotIn<typeof todoForms>;
export type todoFormStoreType = Instance<typeof todoForms>;
