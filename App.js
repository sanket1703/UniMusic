import React ,{Component} from 'react';
import { createAppContainer } from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import FontAwsomeIcon from 'react-native-vector-icons/FontAwesome'
import track from './screens/track'; 
import album from './screens/album';   
import tag from './screens/tag';  
import artist from './screens/artist';  


export default class App extends Component {
  render() {
    return (
          <AppContainer style = {{flex : 1}}/> 
    );
  }
}

const BottomNavigator = createMaterialBottomTabNavigator({

  track : {
    navigationOptions:{
      tabBarLabel : 'Tracks',
      tabBarIcon : ({tintColor})=>( <FontAwsomeIcon name = "music" color = {tintColor} size = {25}></FontAwsomeIcon>),
   
      tabBarColor : 'black'

    
    },
    screen :track
  },
  album : {
    navigationOptions:{
      tabBarLabel : 'Albums',
      tabBarIcon : ({tintColor})=>( <FontAwsomeIcon name = "tasks" color = {tintColor} size = {25}></FontAwsomeIcon>),
      tabBarColor : 'black'


   
    },
    screen : album
  },
  artist : {
    navigationOptions:{
      tabBarLabel : 'Artists',
      tabBarIcon : ({tintColor})=>( <FontAwsomeIcon name = "user-o" color = {tintColor} size = {25}></FontAwsomeIcon>),
      tabBarColor : 'black'


      
    },
    screen : artist 
  }
  ,
  tag : {
    navigationOptions:{
      tabBarLabel : 'Tag',
      tabBarIcon : ({tintColor})=>( <FontAwsomeIcon name = "heart" color = {tintColor} size = {24}></FontAwsomeIcon>),
      tabBarColor : 'black'


      
    },
    screen : tag
  },
}
,
{
  initialRouteName : 'track',
  order : ['track','artist','album','tag'],
  
} ,{
  showLabel : 'true',
  labelStyle : {alignItem : 'center' }
}
)


const AppContainer = createAppContainer(BottomNavigator)

