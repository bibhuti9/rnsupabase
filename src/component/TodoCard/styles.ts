import {makeStyles} from '@rneui/themed';

export const useStyle = makeStyles(theme => ({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: theme?.colors?.primary,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3,
    backgroundColor: theme.colors?.grey3,
    borderRadius: 30,
    paddingHorizontal: 20,
    marginBottom: 15,
    paddingVertical: 15,
    margin: 2,
    borderWidth: theme.mode === 'dark' ? 1 : 0,
    borderColor: theme.colors.primary,
  },
  textContainer: {
    marginHorizontal: theme.spacing?.md,
    flex: 1,
  },
  actionContainer: {},
}));
