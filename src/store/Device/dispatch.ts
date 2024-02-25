import {store} from '..';

export const setLoader = (status: boolean) => {
  store.setLoader(status);
};
