import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import TodoComponent from './src/components/TodoComponent';
import { useTodo } from './src/hooks/use-todo';

export default function App() {

  const { addTodo, removeTodo, todos, toggleTodo } = useTodo()

  const [text, onChangeText] = useState('Useless Text');


  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>SIMPLE TODO</Text>
      <TextInput style={styles.input} onChangeText={onChangeText} value={text} />
      <TouchableOpacity style={styles.mainButton}  onPress={() => addTodo({text, id: Math.random(), done: false})} >
        ADD TODO
      </TouchableOpacity>
      {todos.map(todo => (
        <TodoComponent key={todo.id} todo={todo} removeTodo={removeTodo} toggleTodo={toggleTodo} />
      ))}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    backgroundColor: '#D9D9D9',
    padding: 10,
    margin: 10,
    width: '80%',
    borderRadius: 3,
  },
  mainButton: {
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
    margin: 10,
    display: 'flex',
    alignItems: 'center',
    color: 'white',
    padding: 10,
    backgroundColor: '#1D88EA',
    width: '80%',
    borderRadius: 3,
  },
  mainTitle: {
    fontWeight: 'bold',
    fontSize: 30,
    margin: 10,
  }
});
