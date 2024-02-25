import React from 'react';

import {typo} from '@theme/colors';
import {Font, PropsTypes} from './types';

import {makeStyles} from '@rneui/themed';
import {Text} from 'react-native';

export default function Typography({
  children,
  font = Font.OutFitRegular,
  textStyle,
  size = typo.M,
  color,
}: PropsTypes) {
  const styles = useStyle({font, size, color});
  return <Text style={[styles.text, textStyle]}>{children}</Text>;
}
const useStyle = makeStyles(
  (
    theme,
    props: {
      font: string;
      size: number;
      color: string | undefined;
    },
  ) => ({
    text: {
      fontFamily: 'Caveat-Regular',
      fontSize: props.size,
      flexDirection: 'row',
      alignItems: 'center',
      color: props?.color ?? theme.colors.black,
    },
  }),
);
