import React, {useState} from 'react';
import {
    View,
    StyleSheet,
    TouchableWithoutFeedback,
    TouchableOpacity,
    FlatList,
  } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "./AppText";
import defaultStyles from "../config/styles";
import Screen from "./Screen";
import AppModal from './AppModal'

function FlatPicker({items, placeholder, onSelectItem, selectedItem, width="100%"}){
    
    const [modalVisible, setModalVisible] = useState(false)
  
    return (
    <View>
        <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
            <View style={[styles.container, { width }]}>
            {selectedItem ? (
                <AppText style={styles.text}>{selectedItem.label}</AppText>
            ) : (
                <AppText style={styles.placeholder}>{placeholder}</AppText>
            )}

            <MaterialCommunityIcons
                name="chevron-down"
                size={20}
                color={defaultStyles.colors.medium}
            />
            </View>
        </TouchableWithoutFeedback>


        <AppModal 
            visible={modalVisible} 
            onCancel={() => setModalVisible(false)}
            modalStyle={{
                justifyContent:'flex-end',
            }}
            innerContainerStyle={{
                width:'100%'
            }}
        >
            <Screen>
                <FlatList
                    style={{backgroundColor:defaultStyles.colors.white}}
                    data={items}
                    keyExtractor={(item) => item.value.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => {
                            setModalVisible(false);
                            onSelectItem(item)
                        }}>
                            <AppText style={styles.optionText}>{item.label}</AppText>
                        </TouchableOpacity>
                    )}
                />
            </Screen>
        </AppModal>

    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.light,
        borderRadius: 25,
        flexDirection: "row",
        padding: 15,
        marginVertical: 10,
      },
      placeholder: {
        color: defaultStyles.colors.medium,
        flex: 1,
      },
      text: {
        flex: 1,
      },
      optionText:{
        padding:10
      }

});

export default FlatPicker;