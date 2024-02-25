import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {useStyle} from './styles';
import {pop} from '@utils/navigation';
import {Route} from '@navigators/options';
import {makeStyles, useTheme} from '@rneui/themed';

interface PropsTypes {
  routeName: string | undefined;
}

export default function Header({routeName}: PropsTypes) {
  const styles = useStyle();
  const {theme, updateTheme} = useTheme();

  const onPress = () => {
    updateTheme(() => ({
      mode: theme.mode === 'dark' ? 'light' : 'dark',
    }));
  };
  return (
    <View style={styles.container}>
      {/* Left */}
      {routeName !== undefined && routeName === Route.AddTodo && (
        <TouchableOpacity onPress={pop}>
          <Icon name="chevron-left" size={30} color={theme.colors.primary} />
        </TouchableOpacity>
      )}
      {routeName !== Route.AddTodo && (
        <TouchableOpacity style={styles.rightContainer} onPress={onPress}>
          <MaterialIcon
            size={30}
            color={theme.colors.secondary}
            name={theme.mode === 'dark' ? 'light-mode' : 'dark-mode'}
          />
        </TouchableOpacity>
      )}
    </View>
  );
}
