import React from "react";
import { View, StyleSheet, TouchableHighlight } from "react-native";

import Swipeable from "react-native-gesture-handler/Swipeable";

import AppText from "../../AppText";
import colors from "../../../config/colors";

//extended version from ListItem(default)
function ShoppingItem({
  name,
  quantity,
  note,
  renderRightActions,
  status
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={()=>{}}>
        <View style={styles.container}>
            <View style={styles.detailsContainer}>
                <View style={styles.nameContainer}>
                    <AppText style={styles.name} numberOfLines={1}>
                        {name}
                    </AppText>
                </View>
                <View style={styles.quantityContainer}>
                    <AppText style={styles.quantity}>
                        {quantity}
                    </AppText>
                </View>
                <View style={styles.noteContainer}>
                    <AppText style={styles.note} numberOfLines={1}>
                        {note}
                    </AppText>
                </View>
            </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        flexDirection: "row",
        padding:15,
        backgroundColor: colors.white,
    },
    detailsContainer: {
        flexDirection:'row',
        flex:1
    },
    nameContainer:{
        width:'25%'
    },
    name:{

    },
    quantityContainer:{
        width:'20%'
    },
    quantity:{
        textAlign:'center'
    },
    noteContainer:{
        width:'55%'
    },
    note:{

    }
});

export default ShoppingItem;
