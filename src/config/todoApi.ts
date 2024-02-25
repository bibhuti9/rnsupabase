import {todoFormStoreType} from '@store/TodoForm';
import {supabase} from './supabase';
import {showMessage} from 'react-native-flash-message';
import {setLoader} from '@store/Device/dispatch';
import {pop} from '@utils/navigation';
import {store} from '@store/index';
import {todosSnapShot} from '@store/Todos';

const Promises = (query: todoFormStoreType, hasTodo: boolean = false) => {
  return new Promise((resolve, _) => {
    if (hasTodo) {
      supabase
        .from('todos')
        .update(query)
        .eq('_id', query._id)
        .then(result => resolve(result));
    } else {
      supabase
        .from('todos')
        .insert([query])
        .single()
        .then(result => resolve(result));
    }
  });
};

export const addTodoApi = (query: todosSnapShot, hasTodo: boolean = false) => {
  setLoader(true);
  try {
    Promises(query, hasTodo).finally(() => {
      store.setTasks({
        _id: query._id,
        description: query.description,
        done: query.done,
        icon: query.icon,
        title: query.title,
      });
      showMessage({
        message: `${hasTodo ? 'Update' : 'Add'} task successfully`,
        type: 'success',
      });
      setLoader(false);
      pop();
    });
  } catch (err) {
    console.log(err);
  }
};

export const onCheckedTask = (query: todosSnapShot) => {
  store.setTasks({
    _id: query._id,
    description: query.description,
    done: !query.done,
    icon: query.icon,
    title: query.title,
  });
  supabase.from('todos').update({done: !query.done}).eq('_id', query._id);
};

export const onDeleteTask = (query: todosSnapShot) => {
  supabase
    .from('todos')
    .delete()
    .eq('_id', query._id)
    .then(() => {
      store.deleteTask(query._id);
      setLoader(false);
    });
};

export const fetchAllTodos = () => {
  supabase
    .from('todos')
    .select()
    .then(result => {
      store.addTasks(result.data);
    });
};
