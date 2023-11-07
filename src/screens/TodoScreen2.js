import { View, Text, Image, Button, Pressable, TextInput, FlatList, ScrollView } from 'react-native';
import HeaderTiltle from './HeaderTiltle';
import { useEffect, useState } from 'react';

export default function ToDoScreen2({ route, navigation }) {

    const [state, setState] = useState("");
    const [todos, setTodos] = useState([]);

    useEffect(() => {

        fetch("https://6540a3af45bedb25bfc23aa3.mockapi.io/api/v1/Todos")
            .then(response => response.json())
            .then(data => {
                setTodos(data)
            })

    }, [])

    console.log(route)
    return (

        <View style={{ flex: 1, gap: 50, paddingLeft: 20, paddingRight: 20 }}>
            <HeaderTiltle navigation={navigation} name={route.params ? route.params.name : "abc"} />

            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 20, height: 50, borderWidth: 1, paddingLeft: 10 }}>
                <TextInput
                    style={{ fontSize: 16, outline: 'none' }}
                    onChangeText={(text) => { setState(text) }}
                    value={state}
                    placeholder="find your task"
                />
            </View>

            <View style={{}}>

                {todos.length > 0 && todos.map(todo => <View style={{
                    height: 60,
                    borderBottomLeftRadius: 10,
                    borderTopLeftRadiusRadius: 10,
                    borderBottomRightRadius: 10,
                    borderTopRightRadius: 10,
                    alignItems: 'center',
                    gap: 10,
                    flexDirection: 'row',
                    justifyContent:'space-between'

                }}>

                    <Text style={{}}>{todo.title}</Text>
                    <Pressable style={{}} onPress={() => navigation.navigate('Screen', {})}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M3.42871 20.5715L20.5716 20.5715" stroke="#E05858" stroke-width="2.05714" stroke-miterlimit="10" stroke-linecap="square" />
                            <path d="M9.42878 16.2858L5.14307 17.143L6.00021 12.8573L15.1776 3.67982C15.5128 3.34468 16.0554 3.34468 16.3896 3.67982L18.6062 5.8964C18.9414 6.23154 18.9414 6.77411 18.6062 7.1084L9.42878 16.2858Z" stroke="#E05858" stroke-width="2.05714" stroke-miterlimit="10" stroke-linecap="square" />
                            <path d="M12.8569 6L16.2855 9.42857" stroke="#E05858" stroke-width="2.05714" stroke-miterlimit="10" />
                        </svg>
                    </Pressable>


                </View>)}










            </View>
            <Button title="Add" onPress={() => navigation.navigate('ToDoScreen3',{name:route.params.name})} style={{  }} />
        </View>

    )
}