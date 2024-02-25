import NavigationContainer from '@navigators/index';
import {provider} from '@theme/provider';
import {AppRegistry} from 'react-native';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';

export const createRootNavigation = () => {
  return AppRegistry.registerComponent('rnrecoil', () =>
    gestureHandlerRootHOC(provider(NavigationContainer)),
  );
};
