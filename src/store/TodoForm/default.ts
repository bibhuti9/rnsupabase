import {todoFormStoreType} from '.';
import uuid from 'react-native-uuid';

export const defaultTodoFormState = (
  defaultalues: todoFormStoreType,
): todoFormStoreType => {
  return {
    _id: defaultalues?._id ?? (uuid.v4() as string),
    description: defaultalues?.description ?? '',
    icon: defaultalues?.icon ?? '🤩',
    title: defaultalues?.title ?? '',
    done: defaultalues?.done ?? false,
  };
};

export const getTodoFormState = () => {
  return {...defaultTodoFormState()};
};
