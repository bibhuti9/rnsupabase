import {View, ScrollView, TextInput} from 'react-native';
import React from 'react';
import {useStyle} from './styles';
import {Input, useTheme} from '@rneui/themed';
import {store} from '@store/index';
import {todoFormStoreType} from '@store/TodoForm';
import {observer} from 'mobx-react';

function AddTodo() {
  const styles = useStyle();
  const {theme} = useTheme();
  const todoForm: todoFormStoreType = store.todoForm;
  return (
    <View>
      <ScrollView>
        <View style={styles.topInputContainer}>
          <TextInput
            value={todoForm.icon}
            style={styles.leftInputContainer}
            textAlign="center"
            onChangeText={e => store.setTodoForm(e, 'icon')}
            maxLength={2}
          />
          <TextInput
            placeholderTextColor={theme?.colors?.grey2}
            style={styles.titleInout}
            value={todoForm.title}
            placeholder="Task name..."
            onChangeText={e => store.setTodoForm(e, 'title')}
            maxLength={100}
          />
        </View>
        <Input
          placeholder="Enter Category Description..."
          onChangeText={e => store.setTodoForm(e, 'description')}
          multiline={true}
          style={styles.bottomInputContainer}
          maxLength={300}
          placeholderTextColor={theme?.colors?.grey2}
          value={todoForm.description}
          inputStyle={styles.descriptionInput}
        />
      </ScrollView>
    </View>
  );
}
export default observer(AddTodo);
