import {makeStyles} from '@rneui/themed';

export const useStyle = makeStyles(theme => ({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: theme?.spacing?.xl,
  },
  rightContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
}));
