import React, {useState} from 'react';
import {
    View,
    StyleSheet,
    TouchableWithoutFeedback,
  } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import DateTimePicker from '@react-native-community/datetimepicker';

import AppText from "./AppText";
import defaultStyles from "../config/styles";
import AppModal from './AppModal'

function DatePicker({placeholder, onSelectItem, selectedItem, width="100%"}){
    
    const [modalVisible, setModalVisible] = useState(false)
    const [date, setDate] = useState(new Date());

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setDate(currentDate);
    };
    
    return (
    <View>
        <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
            <View style={[styles.container, { width }]}>
            {selectedItem ? (
                <AppText style={styles.text}>{selectedItem}</AppText>
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
            onOk={() =>  {setModalVisible(false); onSelectItem(date)}}
            modalStyle={{
                justifyContent:'flex-end',
            }}
            innerContainerStyle={{
                width:'100%'
            }}
        >
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={'date'}
            is24Hour={true}
            display="default"
            onChange={onChange}
            style={{
                backgroundColor:defaultStyles.colors.white
            }}
          />
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

export default DatePicker;