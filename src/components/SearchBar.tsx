import { View, StyleSheet, TouchableOpacity, TextInput} from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowUpZA, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { useNavigation } from '@react-navigation/native';

export default function SearchBar(){
    const navigation: any = useNavigation();

    return(
        <View style={styles.searchBar}>
            <TouchableOpacity
          style={styles.buttonSort}
          activeOpacity={0.5}><FontAwesomeIcon icon={faArrowUpZA} size={25} style={styles.imgIcon} /></TouchableOpacity>
            <TextInput style={styles.form}></TextInput>
            <TouchableOpacity
          style={styles.buttonAdd}
          activeOpacity={0.5} onPress={() =>
            navigation.navigate("Add Form")
          }><FontAwesomeIcon icon={faUserPlus} size={25} style={styles.imgIcon}/></TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    imageSearch:{
        width:18,
        height:18
    },
    imgIcon:{
        marginTop: 8
    },
    image:{
        marginTop:8,
        width: 25,
        height: 25
    },
    buttonSort:{
        backgroundColor: '#B8860B',
        marginRight: 7,
        borderStyle: 'solid',
        borderRadius: 5,
        width: '12%',
        height: '100%',
        alignItems: 'center',
    },
    buttonAdd:{
        backgroundColor: '#B8860B',
        marginLeft: 7,
        borderStyle: 'solid',
        borderRadius: 5,
        width: '12%',
        height: '100%',
        alignItems: 'center',
    },
    searchBar: {
        flexDirection: 'row',
        textAlign: 'center',
        justifyContent: 'center'
    },
    form: {
        padding: 7,
        backgroundColor: '#ffffff',
        width: '70%',
        borderWidth: 2,
        borderStyle: 'solid',
        borderRadius: 5,
        borderColor: '#000000'
      },
})