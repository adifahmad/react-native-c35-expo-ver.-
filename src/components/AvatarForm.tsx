import { Button, View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { updateAvatar } from '../actions/users'
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import { useRoute } from '@react-navigation/native'
const logoImg = require("../../assets/usertie.png")

const imgDir = FileSystem.documentDirectory + 'images/';


export default function AvatarForm() {
    const store: any = useRoute();
    const user = store.name;
    const dispatch: any = useDispatch()
    const navigation: any = useNavigation()
    const [avatar, setUpdateAvatar] = useState(true)
    const [file, setFile]: [any, any] = useState<any>(null);

    const upload = () => {
        const formData: any = new FormData();
        formData.append('avatar', {
            name: file.assets[0].fileName,
            size: file.assets[0].fileSize,
            type: file.assets[0].type,
            uri: file.assets[0].uri,
        });
        dispatch(updateAvatar({ id: user.id, avatar: formData }));
        navigation.goBack();
    };

    const onButtonPress = useCallback(
        async (type: 'capture' | 'library', options: any) => {
          try {
            let data: any;
            if (type === 'capture') {
              data = await ImagePicker.launchCameraAsync(options);
            } else {
              data = await ImagePicker.launchImageLibraryAsync(options);
            }
            if (!data?.didCancel) {
              setFile(data);
              setUpdateAvatar(false);
            }
          } catch (error) {
            console.error('Error selecting image:', error); // Handle error appropriately
          }
        },
        [setFile]
      );
      


    return (
        <View>
            <View>
                <View style={styles.avatarForm}>
                    <Text style={styles.textAvatar}>Pilih Avatar</Text>
                    <View>
                        {avatar && (<Image style={styles.imgAvatar} source={{
                            uri: `http://192.168.0.113:3001/images/${user.avatar ? user.avatar : 'usertie.png'}`
                        }} />)}
                        {file?.assets && (
                            <Image style={styles.imgAvatar} source={{ uri: file?.assets[0].uri }} />
                        )}
                        <Button title="Select Avatar" onPress={() =>
                            onButtonPress('library', {
                                mediaTypes: ImagePicker.MediaTypeOptions.Images,
			                    allowsEditing: true,
			                    aspect: [4, 3],
			                    quality: 0.75
                            })
                        } />
                    </View>
                </View>
                <View>
                    <TouchableOpacity style={styles.buttonSave} onPress={upload}>
                        <Text style={styles.textButton}> Save </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({

    textAvatar:{
        fontSize: 20,
    },

    avatarForm: {
        alignItems: 'center',
        marginTop: 50,
        flexDirection: 'column'
    },
    buttonSave: {
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
    textButton: {
        textAlign: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        fontSize: 15,
        marginTop: 7
    },
    imgAvatar: {
        width: 350,
        height: 350,
        resizeMode: 'center',
    }
})