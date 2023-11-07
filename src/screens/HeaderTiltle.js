import { View, Text, Image, Button, Pressable, TextInput, FlatList, ScrollView } from 'react-native';
export default function HeaderTiltle({ navigation, name ,reverse}) {

    return (
        <View style={{ flexDirection:reverse ? 'row-reverse':'row',alignItems:'center',justifyContent:'space-between'}}>
            <Pressable style={{  }} onPress={() => navigation.navigate('ToDoScreen1',{})}>
                
                 
            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="16" viewBox="0 0 9 16" fill="none">
                <path d="M8.84092 1.84091L7.5 0.5L0 8L7.5 15.5L8.84092 14.1591L2.68182 8L8.84092 1.84091Z" fill="#9095A0" />
            </svg>
                  </Pressable>
            <View style={{flexDirection: 'row',alignItems:'center',gap:13}}>
                <Image
                    style={{ width: 50, height: 50,borderRadius:'50%' }}
                    source={{ uri: 'https://s120-ava-talk.zadn.vn/1/5/c/8/18/120/2236f407482514a2c4c51575e425eb96.jpg' }}
                />
                <View style={{}}>
                    <Text style={{fontSize:19,fontWeight:'bold',textAlign:'center'}}>{name}</Text>
                    <Text style={{fontSize:18}}>Have a good day</Text>
                </View>
            </View>
        </View>
    );
}