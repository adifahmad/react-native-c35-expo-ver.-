import { Button, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { useDispatch } from 'react-redux'
import { Link, useLocation, useNavigate } from "react-router-dom"
import { updateAvatar } from '../actions/users'
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import Ionicons from '@expo/vector-icons/Ionicons';

const imgDir = FileSystem.documentDirectory + 'images/';


export default function AvatarForm() {
    const location = useLocation();
    const { user } = location.state;
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [avatar, setUpdateAvatar] = useState({0 : ''})

    var formData = new FormData();
    formData.append("avatar", avatar[0]);

    return (
        <View>
            <View>
                <View style={styles.avatarForm}>
                    <Text>Pilih Avatar</Text>
                    <View>
                        <Button title="Select Avatar"/>
                    </View>
                </View>
                <View>
                    <TouchableOpacity style={styles.buttonSave}>
                    <Text style={styles.textButton}> Save </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({

    avatarForm:{
        alignItems:'center',
        marginTop: 100,
        marginLeft: 100,
        flexDirection: 'row'
    },
    buttonSave:{
        marginTop: 50,
        marginLeft: 5,
        backgroundColor: '#B8860B',
        width: '97%',
        height: 40,
        borderStyle: 'solid',
        borderRadius: 5,
        borderColor: '#000000',
        borderWidth: 1

    },
    textButton:{
        textAlign: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        fontSize: 15,
        marginTop: 7
    }
})