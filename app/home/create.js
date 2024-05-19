import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';
const create = () => {
    return (
        <View style={{ padding: 10 }}>
            <Ionicons name="arrow-back" size={24} color="black" />
            <Text style={{fontSize:20, marginTop:10}}> Create Habit</Text>
            <TextInput style={{ width: "95%", marginTop: 15, padding: 20, borderRadius: 10, backgroundColor: "#E1EBEE" }} 
            placeholder="Title"/>

            
        </View>
    )
}

export default create

const styles = StyleSheet.create({})