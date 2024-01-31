import { Button, View, Text, TextInput } from 'react-native'
import { useState } from 'react'
import { Link, useLocation, useNavigate } from "react-router-dom"
import { useDispatch } from 'react-redux'
import { updateAvatar } from '../actions/users'


export default function AvatarForm() {
    const dispatch = useDispatch()
    const [avatar, setUpdateAvatar] = useState({0 : ''})


    return (
        <View>
            <View>
                <Button title='Cancel' />
                <View>
                    <Text>Pilih Avatar</Text>
                    <View>
                        <Button title="Select Avatar"/>
                    </View>
                </View>
                <View>
                    <Button title="Save"/>
                </View>
            </View>
        </View>
    )
}
