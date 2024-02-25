import {todoFormStoreType} from '.';
import {StoreType} from '..';

export const todoFormAction = ({todoForm}: StoreType) => {
  function setTodoForm(
    title: string,
    property: 'title' | 'description' | 'icon' | '_id',
  ) {
    todoForm[property] = title;
  }
  function setTodoForms(form: todoFormStoreType) {
    todoForm['_id'] = form._id;
    todoForm['title'] = form.title;
    todoForm['description'] = form.description;
    todoForm['icon'] = form.icon;
    todoForm['done'] = form.done;
  }
  return {setTodoForm, setTodoForms};
};
