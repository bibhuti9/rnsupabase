import {makeStyles} from '@rneui/themed';

export const useStyle = makeStyles(theme => ({
  container: {
    position: 'absolute',
    bottom: 20,
    right: 0,
    zIndex: 1,
    height: 50,
    borderRadius: 50,
    backgroundColor: theme.colors.primary,
    shadowColor: theme.colors.primary,
    shadowOffset: {
      width: 1,
      height: 0,
    },
    shadowOpacity: 0.6,
    shadowRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: theme.spacing.lg,
  },
}));
