import {Platform, StyleSheet} from 'react-native';
import {theme} from './index';
import {sizes} from './colors';
import {useTheme} from '@rneui/themed';
export const getShadow = (elevation: number) => {
  const {theme} = useTheme();
  return Platform.select({
    ios: {
      zIndex: elevation,
      shadowColor: '#000',
      shadowOpacity: 0.0015 * elevation + 0.18,
      shadowRadius: 0.54 * elevation,
      shadowOffset: {
        width: 1,
        height: 1,
      },
    },
    android: {
      elevation: elevation,
      shadowColor: theme.colors.black,
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowOpacity: 0.1,
      shadowRadius: 20,
    },
  });
};

export const commonStyle = StyleSheet.create({
  contianer: {
    padding: sizes.padding + 5,
  },
  iconStyle: {
    width: 30,
    height: 30,
  },
  buttonSquare: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerButtonIcon: {
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  headerButtonSmallIcon: {
    height: 35,
    width: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  buttonCircle: {
    width: 40,
    height: 40,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  smallImageStyle: {
    height: 45,
    width: 45,
  },
  GapH: {
    marginHorizontal: sizes.margin + 10,
  },
  GapV: {
    marginVertical: sizes.margin + 10,
  },
  nextPickerContainer: {
    backgroundColor: 'red',
  },
  GapB: {
    marginBottom: 10,
  },
});
