import React, {useState} from "react"
import { View, Text, TextInput, TouchableOpacity } from "react-native"
import { database } from "../../config/firebaseconfig"
import styles from "./style"
import { FontAwesome } from "@expo/vector-icons"


export default function NewTask({navigation}){
    const [description, setDescription] = useState(null)


    function addTask(){
        database.collection("tasks").add({
            description: description,
            status: false
        })
        navigation.navigate("Tasks")
    }
    
    return(
        <View style={styles.container}>
            <Text style={styles.label}>Descrição:</Text>
            <TextInput
            style={styles.input}
            placeholder="Exemplo: estudar JavaScript"
            placeholderTextColor={'#e3e3e3'}
            onChangeText={setDescription}
            value={description}
            />
            <TouchableOpacity style={styles.buttonNewTask}
                                onPress={() => addTask()} 
            >
                <Text style={styles.iconButton}>Salvar</Text>
            </TouchableOpacity>
        </View>
    )
}