import {StoreType} from '..';

export function loaderAction({device}: StoreType) {
  function setLoader(status: boolean) {
    device.isLoading = status;
  }

  return {setLoader};
}
