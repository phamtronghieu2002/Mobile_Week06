import { View, Text, Image, Button, Pressable, TextInput, FlatList, ScrollView } from 'react-native';
import HeaderTiltle from './HeaderTiltle';
import { useEffect, useState } from 'react';

export default function ToDoScreen3({ route, navigation }) {

    const [state, setState] = useState("");

    const handleAdd = async () => {
        try {
            const json = await fetch('https://httpbin.org/post', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ title: state })
            })
            const res = await json.json();
            if (res) {
                navigation.navigate('ToDoScreen3', {})
            }


        } catch (error) {
            console.log(error)
        }

    }



    return (

        <View style={{ flex: 1, gap: 50, paddingLeft: 20, paddingRight: 20 }}>
            <HeaderTiltle navigation={navigation} name={route.params ? route.params.name : "abc"} reverse />

            <Text style={{ textAlign: 'center', fontSize: 20 }}>Add your job</Text>

            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 20, height: 50, borderWidth: 1, paddingLeft: 10 }}>
                <TextInput
                    style={{ fontSize: 16, outline: 'none' }}
                    onChangeText={(text) => { setState(text) }}
                    value={state}
                    placeholder="add your job"
                />
            </View>


            <Button title="Finish" onPress={ handleAdd} style={{}} />
        </View>

    )
}