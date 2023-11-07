import { View, Text, Image, Button, Pressable, TextInput, FlatList, ScrollView } from 'react-native';
import book from "..//assets/book.png"
import { useState } from 'react';
export default function ToDoScreen1({ navigation }) {

        const [state, setState] = useState("");
        return (

                <View style={{ flex: 1, justifyContent: 'center', gap: 70, paddingLeft: 20, paddingRight: 20 }}>
                        <Image source={book} style={{ marginLeft: 'auto', marginRight: 'auto', width: 271, height: 271 }} />
                        <Text style={{ fontSize: 23, textAlign: 'center' }}>Manger yout {"\n"} task</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 20, height: 50, borderWidth: 1, paddingLeft: 10 }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M16 16.5L4 16.5C3.172 16.5 2.5 15.828 2.5 15L2.5 5C2.5 4.172 3.172 3.5 4 3.5L16 3.5C16.828 3.5 17.5 4.172 17.5 5L17.5 15C17.5 15.828 16.828 16.5 16 16.5Z" stroke="#171A1F" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M4.5 6.5L10 11L15.5 6.5" stroke="#171A1F" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <TextInput
                                        style={{ fontSize: 16, outline: 'none' }}
                                        onChangeText={(text) => { setState(text) }}
                                        value={state}
                                        placeholder="enter your name"
                                />
                        </View>
                        <Button title="Get start" onPress={() => { navigation.navigate('ToDoScreen2',{name:state}) }} style={{ marginLeft: 'auto', marginRight: 'auto' }} />
                </View>

        );


}