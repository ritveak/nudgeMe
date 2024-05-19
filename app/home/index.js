import { StyleSheet,View, Text, ScrollView, Pressable } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
const index = () => {
    const router = useRouter();
  return (
    <ScrollView style={{flex:1, backgroundColor:"white",padding :10}}>
        <View style={{flexDirection :"row", alignItems:"center", justifyContent:"space-between"}}>
            <FontAwesome5 name="hand-point-right" size={27} color="black" />
            <AntDesign onPress={()=> router.push("/home/create")} name="plus" size={24} color="black" />
        </View>
        <Text style={{marginTop:5, fontSize:23, fontWeight:"500"}}>Categories</Text>

    </ScrollView>
  )
}

export default index

const styles = StyleSheet.create({})