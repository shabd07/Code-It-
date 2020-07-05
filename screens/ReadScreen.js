import React,{component} from 'react'
import { StyleSheet, Text, View, TextInput,TouchableOpacity,Image,Alert } from 'react-native';
import db from '../config'
import firebase from 'firebase'
export default class ReadScreen extends React.Component{
    render(){
        return(
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <Text>Welcome</Text>
            </View>
        );
    }
}
