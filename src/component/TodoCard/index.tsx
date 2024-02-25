import {TouchableOpacity, View} from 'react-native';
import React from 'react';
import {todosStoreType} from '@store/Todos';

import {Route} from '@navigators/options';
import {store} from '@store/index';
import {push} from '@utils/navigation';
import {observer} from 'mobx-react';
import {useStyle} from './styles';
import Icons from 'react-native-vector-icons/MaterialIcons';
import {useTheme} from '@rneui/themed';
import Typography from '@component/typography';
import {onCheckedTask, onDeleteTask} from '../../config/todoApi';

const ICON_SIZE = 22;

function TodoCard({item}: {item: todosStoreType}) {
  const styles = useStyle();
  const {theme} = useTheme();
  const done = item.done;
  const onPress = () => {
    store.setTodoForms(item);
    push({screenName: Route.AddTodo});
  };
  const onDone = () => onCheckedTask(item);
  const onDelete = () => onDeleteTask(item);
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <TouchableOpacity onPress={onDone}>
        <Icons
          name={done ? 'check-circle-outline' : 'radio-button-unchecked'}
          size={ICON_SIZE}
          color={theme.colors?.primary}
        />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Typography>{item.title}</Typography>
      </View>
      <TouchableOpacity onPress={onDelete}>
        <Icons
          name="delete-outline"
          size={ICON_SIZE}
          color={theme.colors?.primary}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}
export default observer(TodoCard);
