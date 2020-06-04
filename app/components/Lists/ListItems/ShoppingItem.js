import React, {useRef} from "react";
import { View, StyleSheet, TouchableHighlight } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

import AppText from "../../AppText";
import colors from "../../../config/colors";
// import {
//     ListItemDeleteAction,
//     ListItemWishAction,
//     ListItemBuyAction,
//     ListItemEditAction,
//   } from "../../Lists";
import ListItemDeleteAction from '../ListItemDeleteAction'
import ListItemEditAction from '../ListItemEditAction'
import ListItemWishAction from '../ListItemWishAction'
import ListItemBuyAction from '../ListItemBuyAction'

//extended version from ListItem(default)
function ShoppingItem({
  name,
  quantity,
  note,
  onLeftSwipe,
  renderRightOnPress,
  status
}) {

  const rowRef = useRef();

  const renderRightActions= () => (
    [
        <ListItemDeleteAction key="delete" size={50} onPress={()=>{onClose(); renderRightOnPress.onDelete()}} />,
        <ListItemEditAction key="edit" size={50} onPress={()=>{onClose(); renderRightOnPress.onEdit()}}/>,
        <ListItemWishAction key="wish" size={50} onPress={()=>{onClose(); renderRightOnPress.onWish()}}/>,
        <ListItemBuyAction key="buy" size={50} onPress={()=>{onClose(); renderRightOnPress.onBuy()}} />
    ]
  )

  const renderLeftActions= () => (
    <View style={{flex:1}}></View>
  )

  const onClose = () => {
    onLeftSwipe.onBuy();
    rowRef.current.close()
  }

  return (
    <Swipeable ref={rowRef} renderRightActions={renderRightActions} renderLeftActions={renderLeftActions} onSwipeableLeftOpen={onClose}>
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
