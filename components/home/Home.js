import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useThemeContext } from '../../context/ThemeContext';

export default function Home() {
  const { theme, toggleTheme } = useThemeContext();

  const Data = [
    { id: '1', title: 'Item 1' },
    { id: '2', title: 'Item 2' },
    // Add more items as needed
  ];

  return (
    <ScrollView style={[styles.container, {backgroundColor: theme.colors.background}]}>
      {/* Content above the FlatList */}
      <View style={{ padding: 20 }}>
        <Text>Header Content</Text>
      </View>
      
      {/* FlatList */}
      <FlatList
        data={Data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ padding: 10 }}>
            <Text>{item.title}</Text>
          </View>
        )}
      />

      {/* Content below the FlatList */}
      <View style={{ padding: 20 }}>
        <Text>Footer Content</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  }
})