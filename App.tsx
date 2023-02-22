/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {

  FlatList,
  Keyboard,
  KeyboardAvoidingView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Task from './components/Task';


function App(): JSX.Element {

  const [task,setTask] = useState("")
  const [taskItems,setTaskItems] = useState<Array<String>>([])

  const handleAddTask=()=>{
   
    Keyboard.dismiss()
    setTaskItems([...taskItems,task])
    setTask("")
  }

  const completeTask=(index:number)=>{
    
    let itemCopy = [...taskItems]
    itemCopy.splice(index,1)
    setTaskItems(itemCopy)
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"#E8EAED"} barStyle={"dark-content"}/>

      {/* todays task */}
      <View style={styles.taskWrapper}>

        <Text style={styles.sectionTitle}>Today's Tasks</Text>
        <View style={styles.items}>
          {
            taskItems.map((item,index)=>{
              return (
                <TouchableOpacity 
                key={index} 
                onPress={()=>completeTask(index)}>
                  <Task index={index} text={item}/>
                </TouchableOpacity>
              )
            })
          }
        </View>

      </View>
      {/* write a task */}
      <KeyboardAvoidingView style={styles.writeTaskWrapper}>
        <TextInput style={styles.input} placeholder={"Write a task"} value={task} onChangeText={(text)=>setTask(text)}/>

        <TouchableOpacity onPress={handleAddTask}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>

    // 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED"
  },
  taskWrapper: {
    paddingTop: 60,
    paddingHorizontal: 20
  },
  sectionTitle: {
    fontSize:30 ,
    fontWeight: "bold"

  },
  items: {
    marginTop: 30
  },
  writeTaskWrapper: {
    position:"absolute",
    bottom:30,
    width:"100%",
    flexDirection:"row",
    justifyContent:'space-around',
    alignItems:'center'
  },
  input: {
    paddingVertical:15,
    paddingHorizontal:15,
    backgroundColor:"white",
    borderRadius:60,
    borderColor:"#C0C0C0",
    borderWidth:1,
    width:270,
  },
  addWrapper: {
    width:60,
    height:60,
    backgroundColor:"#55BCF6",
    borderRadius:60,
    justifyContent:'center',
    alignItems:'center',
    borderWidth:1,
    borderColor:"#55BCF6", 
  },
  addText: {
    color:"white",
    fontSize:30
  },

});

export default App;
