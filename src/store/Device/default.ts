import {deviceShapshot} from '.';

export const defaultDeviceState: deviceShapshot = {
  isLoading: false,
};

export const getDeviceDefaultState = () => {
  return {...defaultDeviceState};
};
