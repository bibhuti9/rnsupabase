import Seperator from '@component/Seperator';
import TodoCard from '@component/TodoCard';
import {todosStoreType} from '@store/Todos';
import {store} from '@store/index';
import {observer} from 'mobx-react';
import React from 'react';
import {View, FlatList} from 'react-native';

function Home() {
  const unDone = store.unDoneTask as todosStoreType[];
  const done = store.doneTask as todosStoreType[];
  const hasSeperator = done.length !== 0 && unDone.length !== 0;
  return (
    <View>
      <FlatList
        data={unDone}
        keyExtractor={item => item._id}
        renderItem={({item}) => <TodoCard item={item} />}
      />

      {hasSeperator && <Seperator />}
      <FlatList
        data={done}
        keyExtractor={item => item._id}
        renderItem={({item}) => <TodoCard item={item} />}
      />
    </View>
  );
}
export default observer(Home);
