import { View, TextInput, Button } from "react-native";
import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { addUser } from '../actions/users'

export default function Add() {
    const dispatch: any = useDispatch()
    const navigation: any = useNavigation()

    const [user, setUser] = useState({ id:0, name: '', phone: '' })

    const AddData = (e) => {
        dispatch(addUser(user))
        setUser({ ...user, name: e.target.value })
        navigation.navigate("Home")
    }

    return (
            <View>
                    <TextInput value={user.name} onChangeText={(e) => setUser({ ...user })}></TextInput>
                    <TextInput value={user.phone} onChangeText={(e) => setUser({ ...user })}></TextInput>
                    <View>
                        <Button title="save" onPress={AddData}></Button>
                    </View>
            </View>
    )
}