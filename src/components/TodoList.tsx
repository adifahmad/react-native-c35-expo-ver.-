import { FlatList, View, StyleSheet, Text } from "react-native";
import TodoItem from "./TodoItem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { loadUser } from "../actions/users";

export default function TodoList(){

    const todos = useSelector((state:any) => state.todos)
    const [sortMode, setSortMode] = useState('desc')
    const [sortBy, setSortBy] = useState('id')
    const [keyword, setKeyword] = useState('')
    const [page, setPage] = useState(1)
    const dispatch : any = useDispatch() 

    useEffect(() => {
        dispatch(loadUser({keyword, sortMode, sortBy, page}))
    }, [dispatch, keyword, sortMode, sortBy, page])

    const data = [
        {id: 0, name: "obi wan kenobi", phone: "081231313123"},
        {id: 1, name: "star", phone: "081245121323" },
        {id: 2, name: "Jimnast", phone: "081415121241"},
        {id: 3, name: "Son", phone: "081415121241"},
        {id: 4, name: "Bruh", phone: "081415134651"},
        {id: 5, name: "Hajime", phone: "08167803913"},
        {id: 6, name: "Crusder", phone: "081921341341"},
        {id: 7, name: "Yagami", phone: "08261311411"},
        {id: 8, name: "Meg", phone: "081709213323"},
        {id: 9, name: "Strawberry", phone: "082612132414"},
        {id: 10, name: "Choco", phone: "08361231310"},
        {id: 11, name: "Vanilla", phone: "081312331131"}       
    ]
    return(        
        <View style={styles.list}>
        <FlatList
        data={data}
        renderItem={({item}) => (<TodoItem todo= {item} />)}
        />
        </View>
    )
}


const styles = StyleSheet.create({
    list: {
        flex: 1,
        backgroundColor: '#ffffff',
        marginTop : 30
      },
})