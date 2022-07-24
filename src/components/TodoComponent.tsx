import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { Todo } from '../types/Todo'


type TodoProps = {
    todo: Todo
    toggleTodo: (id: number) => void
    removeTodo: (id: number) => void
}
export default function TodoComponent({ todo, toggleTodo, removeTodo }: TodoProps) {

  return (
    <View style={styles.flex}>
      <Text style={styles.text}>{todo.text}</Text>
      <TouchableOpacity style={todo.done ? styles.toggleButtonChecked : styles.toggleButton } onPress={() => toggleTodo(todo.id)}>
          CHECK
      </TouchableOpacity>
      <TouchableOpacity style={styles.deleteButton} onPress={() => removeTodo(todo.id)}>
          DELETE
      </TouchableOpacity>
    </View>
  )
}

const toggleButton = {
    fontFamily: 'sans-serif',
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: '#A0A0A0',
    borderRadius: 3,
    padding: 10,
    margin: 10,
}
const styles = StyleSheet.create({
  deleteButton: {
    ...toggleButton,
    backgroundColor: '#EA1D1D',
  },
  toggleButton: {
    ...toggleButton
  },
  toggleButtonChecked: {
    ...toggleButton,
    backgroundColor: '#52EA1D',
  },
  flex: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
    padding: 10,
    textAlign: 'center',
    margin: 10,
    borderRadius: 3,
    backgroundColor: '#EAEAEA'
  },
})