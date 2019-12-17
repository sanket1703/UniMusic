import React ,{Component} from 'react';
import { View, Text,TextInput } from 'react-native';
export default class track extends Component{
    render(){
        return (
            <View style={{flex:1}}>
                <View style = {{paddingTop : 20,opacity : 0.7}}>                
                    <TextInput style = {{textAlignVertical: "center",borderRadius : 20,height : 40 ,width : 340, borderColor : 'grey',borderWidth : 2,alignSelf : 'center'}}></TextInput>
                </View>
                <Text style = {{alignSelf: 'center'}}>track</Text>
            </View>
        );
    }
}