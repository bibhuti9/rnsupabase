import { makeStyles } from '@rneui/themed';
import { sizes } from './colors';

export const typography = makeStyles((theme)=>({
  heading1: {
    fontSize: sizes.L,
    color: theme.colors.black,
  },
  heading2: {
    fontSize: sizes.M,
    color: theme.colors.black,
  },
  heading3: {
    fontSize: sizes.S,
    color: theme.colors.black,
  },
  heading4: {
    fontSize: sizes.SM,
    color: theme.colors.black,
  },
  subtitle1: {
    fontSize: sizes.XL,
    color: theme.colors.grey2,
  },
  subtitle2: {
    fontSize: sizes.L,
    color: theme.colors.disabled,
  },
  subtitle3: {
    fontSize: sizes.M,
    color: theme.colors.grey2,
  },
  subtitle4: {
    fontSize: sizes.S,
    color: theme.colors.grey2,
  },
  subtitle5: {
    fontSize: sizes.SM,
    color: theme.colors.grey2,
  },
}))
