import React, {useEffect} from 'react';
import {ActivityIndicator, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import {useStyle} from './styles';
import {push} from '@utils/navigation';
import {Route} from '@navigators/options';

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';
import {observer} from 'mobx-react';
import {store} from '@store/index';
import {Text} from '@rneui/themed';
import {addTodoApi} from '../../config/todoApi';
import {getTodoFormState} from '@store/TodoForm/default';
import {todosStoreType} from '@store/Todos';

interface PropsTypes {
  routeName: string | undefined;
}

function FloatingButton({routeName}: PropsTypes) {
  const offset = useSharedValue(18);
  const styles = useStyle();
  const todoForm = store.todoForm as todosStoreType;
  const isLoading = store.isLoading as boolean;
  const hasTodo = store.checkTodoFormId(todoForm._id) as boolean;

  const animatedStyles = useAnimatedStyle(() => ({
    width: `${offset.value}%`,
  }));

  const animation = () => {
    const newOffset =
      routeName !== undefined ? (routeName === Route.Home ? 18 : 100) : 18;
    offset.value = withSpring(newOffset, {
      mass: 1,
      stiffness: 100,
      overshootClamping: false,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 2,
      damping: 15,
    });
  };

  useEffect(() => {
    animation();
  }, [routeName]);

  const onPress = () => {
    if (routeName === Route.AddTodo) {
      return addTodoApi(todoForm);
    }
    store.setTodoForms(getTodoFormState());
    push({screenName: Route.AddTodo});
  };

  return (
    <Animated.View style={[styles.container, animatedStyles]}>
      <TouchableOpacity onPress={onPress}>
        {routeName === Route.AddTodo && (
          <>
            {isLoading ? (
              <ActivityIndicator />
            ) : (
              <Text>{hasTodo ? 'Update' : 'Save'}</Text>
            )}
          </>
        )}
        {(routeName === Route.Home || routeName === undefined) && (
          <Icon name="plus" size={23} />
        )}
      </TouchableOpacity>
    </Animated.View>
  );
}
export default observer(FloatingButton);
