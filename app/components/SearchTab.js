import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import { SearchBar } from 'react-native-elements';
import {FontAwesome, Ionicons, MaterialCommunityIcons, MaterialIcons} from '@expo/vector-icons'
import defaultStyles from '../config/styles'

function SearchTab({onChangeText, containerColor=defaultStyles.colors.light, inputContainerColor="white", onClickAdd, onClickConfig, onClickFilter, onClickSort, onClickJoin}){

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
          onClickJoin &&
          <View style={styles.button}>
            <TouchableOpacity onPress={onClickJoin} style={styles.buttonInner}>
              <MaterialCommunityIcons name="login" size={25}/>
            </TouchableOpacity>
          </View>
        }
        {
          onClickAdd &&
          <View style={styles.button}>
            <TouchableOpacity onPress={onClickAdd} style={styles.buttonInner}>
              <MaterialIcons name="add-box" size={25}/>
            </TouchableOpacity>
          </View>          
        }
        {
          onClickConfig &&
          <View style={styles.button}>
            <TouchableOpacity onPress={onClickConfig} style={styles.buttonInner}>
              <Ionicons name="md-settings" size={25}/>
            </TouchableOpacity>
          </View>
        }
        {
          onClickFilter &&
          <View style={styles.button}>
            <TouchableOpacity onPress={onClickFilter} style={styles.buttonInner}>
              <FontAwesome name="filter" size={25}/>
            </TouchableOpacity>
          </View>
        }
        {
          onClickSort &&
          <View style={styles.button}>
            <TouchableOpacity onPress={onClickSort} style={styles.buttonInner}>
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
    padding:7,
  },
  buttonInner:{
    flex:1,
    justifyContent:'center'
  }
});

export default SearchTab;