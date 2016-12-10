import React from 'react';
import {
StyleSheet,
Text,
View,
StatusBar,
TextInput,
ScrollView
} from 'react-native';

var TodoItem = React.createClass({
 render() {
   return (
     <View style={styles.todoContainer}>
       <Text style={styles.todoText}>
         {this.props.text}
       </Text>
     </View>
   )
 }
});

var Main = React.createClass({
render() {
  var temporaryTodos = [
    {
      id: "123123",
      text: "Hi, Silvia!"
    },
    {
      id: "123124",
      text: "Hi again!"
    }
  ]
  var renderTodos = () => {
    return temporaryTodos.map((todo) => {
      return (
        <TodoItem text={todo.text} key={todo.id} id={todo.id}/>
      )
    })
  }
  return (
    <View style={styles.container}>
       <StatusBar barStyle="light-content"/>
      <View style={styles.topBar}>
        <Text style={styles.title}>
          To-Do List
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input}/>
      </View>
        <ScrollView automaticallyAdjustContentInsets={false}>
         {renderTodos()}
        </ScrollView>
    </View>
  );
}
});

const styles = StyleSheet.create({
 container: {
   flex: 1,
   justifyContent: 'flex-start',
   alignItems: 'stretch',
 },
 topBar: {
   padding: 16,
   paddingTop: 28,
   paddingBottom: 8,
   flexDirection: 'row',
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: '#2ecc71'
 },
 title: {
   color: 'white',
   fontSize: 20
 },
 inputContainer: {
   padding: 8,
   paddingTop: 0,
   paddingBottom: 8,
   backgroundColor: '#2ecc71'
 },
 input: {
   height: 26,
   padding: 4,
   paddingLeft: 8,
   borderRadius: 8,
   backgroundColor: 'white'
 },
 todoContainer: {
   padding: 16,
   borderTopWidth: 1,
   borderBottomWidth: 1,
   marginBottom: -1,
   borderColor: '#ccc',
   flexDirection: 'row',
   justifyContent: 'space-between',
   alignItems: 'center'
 // },
 // todoText: {
 //   padding: 16,
 //   borderTopWidth: 1,
 //   borderBottomWidth: 1,
 //   marginBottom: -1,
 //   borderColor: '#ccc',
 //   flexDirection: 'row',
 //   justifyContent: 'space-between',
 //   alignItems: 'center'
 }
});

module.exports = Main;
