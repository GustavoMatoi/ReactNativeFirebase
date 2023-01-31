import React, {useEffect, useState} from "react"
import { SafeAreaView, View , TouchableOpacity, FlatList, Text } from "react-native"
import {database} from "../../config/firebaseconfig"
import styles from "./style"
import { FontAwesome } from "@expo/vector-icons"


export default function Tasks({navigation}){
    const[tasks, setTasks] = useState([])
    
    function deleteTasks(id){
      database.collection("Tasks").doc(id).delete()
    }
  
    
    useEffect(() => {
        database.collection("tasks").onSnapshot((query) => {
          const list = [];
          query.forEach((doc) => {
            list.push({ ...doc.data(), id: doc.id });
          });
          setTasks(list);
        });
      }, []);

        return (
          <View style={styles.container}>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={tasks}
              renderItem={({item}) => { return( 
                <View style={styles.Tasks}>
                  <TouchableOpacity style={styles.deleteTasks}
                      onPress={() => { deleteTasks(item.id)}}>
                              <FontAwesome
                                name="database"
                                size={23}
                                color='#0066FF'
                              ></FontAwesome>
                  </TouchableOpacity>                  
                <Text style={styles.DescriptionTask}
                  onPress={() => navigation.navigate("Details", {id: item.id, description: item.description})}>
                  {item.description}
                </Text>
            </View>
              )
              }}
              />
            <TouchableOpacity style={styles.buttonNewTask}
                              onPress={() => navigation.navigate("New Task")}>
                              <Text style={styles.iconButton}>+</Text>    
            </TouchableOpacity>
          </View>
    )
}