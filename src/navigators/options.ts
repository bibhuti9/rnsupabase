import {StackNavigationOptions} from '@react-navigation/stack';
import {useTheme} from '@rneui/themed';

export enum Route {
  Home = 'Home',
  AddTodo = 'AddTodo',
}

const tmp = (): StackNavigationOptions => {
  const {theme} = useTheme();
  return {
    headerShown: false,
    cardStyle: {
      backgroundColor: theme.colors.grey3,
    },
  };
};

export const screensOptions: StackNavigationOptions = tmp();
