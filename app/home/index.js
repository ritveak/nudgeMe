import { ScrollView } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useRouter, useLocalSearchParams } from 'expo-router';
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const index = () => {
    const router = useRouter();
    const [categories, setCategories] = useState([]);
    useEffect(() => {
      loadCategories();
    }, []);
    const loadCategories = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('@categories');
        // clearData();
        const storedCategories = jsonValue != null || jsonValue == '' ? JSON.parse(jsonValue) : [];
        // console.log(storedCategories);
        // alert(jsonValue);
        setCategories(storedCategories);
      } catch (error) {
        console.error('Error loading categories:', error);
      }
    };
  return (
    <ScrollView style={{flex:1, backgroundColor:"white",padding :10}}>
        <View style={{flexDirection :"row", alignItems:"center", justifyContent:"space-between"}}>
            <FontAwesome5 name="hand-point-right" size={27} color="black" />
            <AntDesign onPress={()=> router.push("/home/create")} name="plus" size={24} color="black" />
        </View>
        <Text style={{marginTop:5, fontSize:23, fontWeight:"500"}}>Categories</Text>
        <Text style={styles.title}>Categories</Text>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={[styles.categoryItem, { backgroundColor: item.color }]}>
            <Text style={styles.categoryTitle}>{item.title}</Text>
            <Text>{item.effect === 'positive' ? '🙂' : '🙁'}</Text>
          </View>
        )}
      />
      <Button
        title="Add Category"
        onPress={() => router.push('/home/create')}
      />
    </ScrollView>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  categoryItem: {
    padding: 16,
    borderRadius: 8,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  categoryTitle: {
    fontSize: 18,
  },
});
