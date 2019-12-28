import React ,{Component} from 'react';
import { View, Text,TextInput,FlatList } from 'react-native';
import {styles } from '../styles'

export default class tag extends Component{
    
    constructor(props) {
        super(props);
        this.state = { 
                        Search : '' ,
                        dataSource : []}
    }
    
    fetchApi = async () => {
        const response = await fetch('http://ws.audioscrobbler.com/2.0/?method=tag.search&tag='+this.state.Search+'&api_key=5b896d82823aa02d2f7abfcaf72c50ad&format=json')
        const result = await response.json()
        const results = await result.results
        const tag = results.tagmatches.tag
    
        this.setState({
          dataSource: tag,
        })
        //console.log(tag)
    }

    Search = search => {
        this.setState({Search : search})
        this.fetchApi()
    } 

    render(){
        return (
            <View style={styles.container}>
                <View style = {styles.upperSection}>                
                    <TextInput style = {styles.textInput}
                    placeholder = '    Search tags'
                    placeholderTextColor ='black'
                      onChangeText={this.Search}></TextInput>
                </View>

            <FlatList
                data={this.state.dataSource}
                renderItem={({ item }) =>
              <View style={styles.box}>
                <Text style={styles.text}>{item.name}</Text>
              </View>
            }
            keyExtractor={(item, index) => index.toString()}
        />
        </View>
        );
    }
}
