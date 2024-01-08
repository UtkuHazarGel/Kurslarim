import { StyleSheet, Text, View, Modal, Pressable, Image, TextInput, TextInputComponent } from 'react-native'
import React, { useState } from 'react'
import { Button } from 'react-native'

export default function ({ visible, onAddCourse, onCancel}) {
    const [enteredCourseText, setEnteredCourseText] = useState("")
    const addCourseHandler = () => {
        onAddCourse(enteredCourseText)
        setEnteredCourseText("")
    }
    /* const courseInputHandler = (enteredText) => {
        setEnteredCourseText(enteredText);
    } */
    
    return (
        <View>
            <Modal
                animationType="slide"

                visible={visible}
                
            >
                <View style={styles.inputContainer}>

                    <View style={{ alignItems: "center" }} >

                        <Image style={styles.image} />

                    </View>

                    <TextInput
                        style={styles.textInput}
                        placeholder='Bir kurs ekle!'
                        value={enteredCourseText}
                        onChangeText={(text) => setEnteredCourseText(text)}
                    />

                    <View style={styles.buttonContainer}>

                        <View style={styles.button}>

                            <Button title='İptal et' color="red" onPress={onCancel} />

                        </View>

                        <View style={styles.button}>

                            <Button title='Ekle' color="blue" onPress={addCourseHandler} />

                        </View>
                    </View>

                </View>

            </Modal>

        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "gray",
        padding: 15,
    },
    image:
    {
        width: 100, height: 100, alignItems: "center", backgroundColor: "green",
        borderRadius: 20,
        margin: 10,
    }
    ,
    textInput: {
        borderWidth: 1,
        width: "100%",
        padding: 10,
        borderRadius: 10,
        backgroundColor: "pink",
        marginVertical: 10,

    },

    buttonContainer: {
        flexDirection: "row",

    },
    button: {
        width: 100,
        marginHorizontal: 8
    },
})