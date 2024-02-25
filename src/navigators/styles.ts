import {makeStyles} from '@rneui/themed';

export const useStyles = makeStyles(theme => ({
  container: {
    margin: 20,
    shadowColor: theme.colors.secondary,
    shadowOffset: {
      width: 1,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 2,
    borderRadius: 20,
    padding: theme.spacing?.lg,
    flex: 1,
    backgroundColor: theme.colors.grey3,
  },
}));
