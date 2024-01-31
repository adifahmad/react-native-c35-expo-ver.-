import { View, StyleSheet, Text, Button, Image, TouchableOpacity, TextInput } from "react-native";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faFloppyDisk, faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useNavigation } from '@react-navigation/native';

const logoImg = require("../../assets/usertie.png")

export default function TodoItem({ todo }: { todo: { name: any, phone: any } }) {
    const navigation: any = useNavigation();
    
    const [userInput, setUserInput] = useState({})

    useEffect(() => {
        setUserInput({name: todo.name, phone: todo.phone})
    }, [todo.name, todo.phone])
    
    const [isEdit, setIsEdit] = useState(false)

    if (isEdit) {
        return (
            <View style={styles.itemRow}>
                <View>
                    <TouchableOpacity onPress={() =>
                        navigation.navigate("Avatar Form")
                        }>
                        <Image
                            style={styles.imageAvatar}
                            source={logoImg}
                        ></Image>
                    </TouchableOpacity>
                </View>
                <View>
                    <TextInput style={styles.form}></TextInput>
                    <TextInput style={styles.form}></TextInput>
                    <View style={styles.buttonStyle}>
                        <TouchableOpacity onPress={() => (setIsEdit(false))}>
                            <FontAwesomeIcon icon={faFloppyDisk} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    } else {
        return (
            <View style={styles.itemRow}>
                <View>
                    <TouchableOpacity
                        onPress={() =>
                        navigation.navigate("Avatar Form")
                        }>
                        <Image
                            style={styles.imageAvatar}
                            source={logoImg}
                        ></Image>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={styles.name}>{todo.name}</Text>
                    <Text style={styles.phoneName}>{todo.phone}</Text>
                    <View style={styles.buttonStyle}>
                        <TouchableOpacity onPress={() => (setIsEdit(true))}>
                            <FontAwesomeIcon icon={faPenToSquare} style={styles.logoEdit} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <FontAwesomeIcon icon={faTrashCan} style={styles.logoDelete} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({

    itemRow: {
        flexDirection: 'row',
        margin: 5,
        padding: 5,
        width: '100%',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 5,
        borderColor: '#000000',
        backgroundColor: '#DCDCDC',
        color: '#000000'
    },
    name: {
        color: "black",
        fontSize: 15,
        marginTop: 10
    },
    phoneName: {
        color: "black",
        fontSize: 17
    },
    buttonStyle: {
        flexDirection: 'row',
        textAlign: 'center',
        width: '100%',
        marginTop: 10
    },
    logoEdit: {
        alignSelf: 'flex-start',
        marginRight: 5,
        width: 20,
        height: 20
    },
    logoDelete: {
        width: 20,
        height: 20
    },
    imageAvatar: {
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
        marginRight: 15
    },
    form: {
        padding : 10,
        backgroundColor: '#ffffff',
        width: 150,
        marginTop: 2,
        marginBottom: 2,
        height: 35,
        borderWidth: 2,
        borderStyle: 'solid',
        borderRadius: 5,
        borderColor: '#000000',
        color: "black",
        fontSize: 12
      }
})