import {makeStyles} from '@rneui/themed';
import {StyleSheet} from 'react-native';

export const useStyle = makeStyles(theme => ({
  container: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: theme.colors.primary,
    marginVertical: 20,
  },
}));
