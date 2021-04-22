import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons'; 

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return(
        <View style={styles.backgroundStyle}>
          <Feather name="search" style={styles.iconStyle}/>
          <TextInput 
            style={styles.inputStyle} 
            placeholder="Search"
            autoCapitalize="none"
            value={term}
            onChangeText={onTermChange}
            autoCorrect={false}
            onEndEditing={onTermSubmit} />
        </View>
    );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#E8E8E8',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
    marginTop: 10
  },
  inputStyle: {
    flex: 1,
    fontSize: 18
  },
  iconStyle: {
    fontSize: 24,
    alignSelf: 'center',
    marginHorizontal: 15
  }
});

export default SearchBar;