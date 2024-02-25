import {makeStyles} from '@rneui/themed';

export const useStyle = makeStyles(theme => ({
  topInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: theme.spacing.md,
    backgroundColor:
      theme.mode === 'light' ? theme.colors.white : theme.colors.grey3,
    borderRadius: 30,
    height: 50,
    overflow: 'hidden',
    marginBottom: theme.spacing.xl,
    borderWidth: theme.mode === 'dark' ? 1 : 0,
    borderColor: theme.colors.primary,
  },
  titleInout: {
    flex: 5,
    color: theme.colors.black,
    marginHorizontal: theme.spacing.md,
    height: '100%',
  },
  leftInputContainer: {
    flex: 1,
    fontSize: 24,
    backgroundColor: theme.colors.primary,
    marginRight: 5,
    margin: 0,
    color: theme.colors.white,
    height: '100%',
  },
  bottomInputContainer: {
    backgroundColor:
      theme.mode === 'light' ? theme.colors.white : theme.colors.grey3,
    height: 230,
    borderRadius: 10,
    borderWidth: theme.mode === 'dark' ? 1 : 0,
    borderColor: theme.colors.primary,
  },
  descriptionInput: {
    padding: 15,
    paddingTop: 15,
    fontSize: 15,
  },
}));
