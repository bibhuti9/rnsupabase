import React from 'react';

import {ThemeProvider} from '@rneui/themed';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import FlashMessage from 'react-native-flash-message';

import {theme} from './index';

export type ThemeProviderFunction = <P>(
  Component: React.ComponentType,
) => React.ComponentType<P>;

export const provider: ThemeProviderFunction = Component => {
  function wrap(props: any): JSX.Element {
    return (
      <SafeAreaProvider>
        <ThemeProvider theme={theme}>
          <Component {...props} />
        </ThemeProvider>
        <FlashMessage position="bottom" />
      </SafeAreaProvider>
    );
  }
  return wrap;
};
