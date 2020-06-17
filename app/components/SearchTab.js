import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import { SearchBar } from 'react-native-elements';
import {FontAwesome, Ionicons} from '@expo/vector-icons'

function SearchTab({onChangeText, containerColor="white", inputContainerColor="grey"}){

  return (
    <View style={{flexDirection:'row', backgroundColor:containerColor}}>
        <View style={{flex:1}}>
            <SearchBar
                placeholder="Type Here..."
                onChangeText={onChangeText}
                value={"search"}
                containerStyle={{backgroundColor:containerColor, borderTopColor: 'transparent', borderBottomColor: 'transparent', padding:5}}
                inputContainerStyle={{backgroundColor:inputContainerColor}}
                inputStyle={{}}
                round
            />
        </View>
        <View style={styles.button}>
          <TouchableOpacity>
            <FontAwesome name="plus-square" size={25}/>
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <TouchableOpacity>
            <Ionicons name="md-settings" size={25}/>
          </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button:{
    justifyContent:'center', 
    alignItems:'center', 
    padding:10
  }
});

export default SearchTab;