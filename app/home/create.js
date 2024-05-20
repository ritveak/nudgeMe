import React, { useState } from 'react';
import { View, Text, TextInput, Picker, Button, StyleSheet } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
const create = () => {
    const router = useRouter();
  const { categories } = useLocalSearchParams();
  let parsedCategories = [];

  try {
    console.log('unparsed categories:', categories);

    parsedCategories = categories ? JSON.parse(categories) : [];
    console.log('parsed categories:', parsedCategories);

  } catch (error) {
    console.error('Error parsing categories:', error);
  }

  const [title, setTitle] = useState('');
  const [effect, setEffect] = useState('positive');
  const [color, setColor] = useState('#3498db');
  const [parent, setParent] = useState(null);

  const handleAddCategory = () => {
    const newCategory = {
      id: (parsedCategories.length + 1).toString(),
      title,
      effect,
      color,
      parent,
    };
    
    // Add the new category to the categories array
    const updatedCategories = [...parsedCategories, newCategory];

    // Navigate back to Categories screen with the updated categories list
    router.push({
      pathname: '/categories',
      params: { newCategories: JSON.stringify(updatedCategories) }
    });
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
        {parsedCategories.map((category) => (
          <Picker.Item key={category.id} label={category.title} value={category.id} />
        ))}
      </Picker>
      <Button title="Add Category" onPress={handleAddCategory} />
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