import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import { SearchBar } from 'react-native-elements';
import {FontAwesome, Ionicons, MaterialCommunityIcons} from '@expo/vector-icons'

function SearchTab({onChangeText, containerColor="grey", inputContainerColor="white", onClickAdd, onClickConfig, onClickFilter, onClickSort}){

  return (
    <View style={{flexDirection:'row', backgroundColor:containerColor, paddingHorizontal:10}}>
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
        {
          onClickAdd &&
          <View style={styles.button}>
            <TouchableOpacity onPress={onClickAdd}>
              <FontAwesome name="plus-square" size={25}/>
            </TouchableOpacity>
          </View>          
        }
        {
          onClickConfig &&
          <View style={styles.button}>
            <TouchableOpacity onPress={onClickConfig}>
              <Ionicons name="md-settings" size={25}/>
            </TouchableOpacity>
          </View>
        }
        {
          onClickFilter &&
          <View style={styles.button}>
            <TouchableOpacity onPress={onClickFilter}>
              <FontAwesome name="filter" size={25}/>
            </TouchableOpacity>
          </View>
        }
        {
          onClickSort &&
          <View style={styles.button}>
            <TouchableOpacity onPress={onClickSort}>
              <MaterialCommunityIcons name="sort" size={25}/>
            </TouchableOpacity>
          </View>
        }


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