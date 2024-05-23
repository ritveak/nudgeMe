import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Picker, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

const create = () => {
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
        console.log(storedCategories);
        // alert(jsonValue);
        setCategories(storedCategories);
      } catch (error) {
        console.error('Error loading categories:', error);
      }
    };
    const clearData = async () => {
      await AsyncStorage.removeItem('@categories').then(()=>{
        console.log("delteddddddd");
        console.log(categories);
        loadCategories();
      }
      );  
    };
  
  
   
  const [title, setTitle] = useState('');
  const [effect, setEffect] = useState('positive');
  const [color, setColor] = useState('#3498db');
  const [parent, setParent] = useState(null);

  const handleAddCategory = async () => {
    const newCategory = {
      id: "a",
      // id: (categories.length + 1).toString(),
      title,
      effect,
      color,
      parent,
    };
    const newArr = [...categories,newCategory];
    // console.log(newArr);
    // const jsonv = JSON.stringify(newArr);
    // console.log(categories);
    setCategories(newArr);
    // console.log(categories);
    // console.log(jsonv != null ? JSON.parse(jsonv) : []);
    await AsyncStorage.setItem('@categories', JSON.stringify(newArr));
  };

    return (
        <View style={styles.container}>
      <Text style={styles.title}>Add Category</Text>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      <Picker
        selectedValue={effect}
        style={styles.picker}
        onValueChange={(itemValue) => setEffect(itemValue)}
      >
        <Picker.Item label="Positive" value="positive" />
        <Picker.Item label="Negative" value="negative" />
      </Picker>
      <TextInput
        style={styles.input}
        placeholder="Color"
        value={color}
        onChangeText={setColor}
      />
      <Picker
        selectedValue={parent}
        style={styles.picker}
        onValueChange={(itemValue) => setParent(itemValue)}
      >
        <Picker.Item label="None" value={null} />
        {categories.map((category) => (
          <Picker.Item key={category.id} label={category.title} value={category.id} />
        ))}
      </Picker>


          {/* <View> <Text>{JSON.stringify(categories)}</Text> </View> */}
  
      <Button title="Add Category" onPress={handleAddCategory} />
      <Button title="Clear All " onPress={clearData} />
      <Button
        title="Go Back"
        onPress={() => router.push('/home')}
      />
    </View>
    )
}

export default create

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
    input: {
      height: 40,
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: 8,
      marginBottom: 20,
      paddingHorizontal: 10,
    },
    picker: {
      height: 50,
      width: '100%',
      marginBottom: 20,
    },
  });