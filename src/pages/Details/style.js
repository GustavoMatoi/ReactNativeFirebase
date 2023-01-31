import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",
        paddingTop: 20
    },
    NewTask: {
        flex: 1,
        backgroundColor: "#FFF",
        borderWidth: 2,
        borderColor: 'red'
    },
    label: {
        width: "90%",
        marginTop: 20,
        marginLeft: 20,
        fontSize: 16,
        color: '#0066FF'
    },
    input: {
        width: "90%",
        marginTop: 10,
        padding: 10,
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: '#0066FF',
        marginLeft: 'auto',
        marginRight: 'auto',
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
    iconButton: {
        color: "#FFF",
        fontSize: 15,
        fontWeight: "bold",       
    }

})

export default styles;