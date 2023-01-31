import React from "react"
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",
        paddingTop: 20
    },
    buttonNewTask: {
        position: 'absolute',
        width: 60,
        height: 60,
        bottom: 30,
        left: 20,
        backgroundColor: "#0066FF",
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
    },
    deleteTasks:{
        justifyContent: 'center',
        paddingLeft: 15,
    },
    DescriptionTask: {
        width: "75%",
        alignContent: 'flex-start',
        backgroundColor: '#F5F5F5CF',
        padding: 12,
        paddingHorizontal: 20,
        borderRadius: 50,
        marginBottom: 5,
        marginRight: 15,
        color: "black",

    },
    iconButton: {
        color: "#FFF",
        fontSize: 30,
        fontWeight: "bold",
    },

    Tasks: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'space-evenly',

    }

})

export default styles