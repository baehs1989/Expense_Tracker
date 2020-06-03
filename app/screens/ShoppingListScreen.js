import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import AppText from '../components/AppText';
import defaultStyles from '../config/styles';

import Screen from "../components/Screen";

import {
  ShoppingItem,
  ListItemDeleteAction,
  ListItemWishAction,
  ListItemBuyAction,
  ListItemEditAction,
  ListItemSeparator
} from "../components/Lists";

const initialItems = [
  {
    id: 1,
    name: "Toilet Paper",
    quantity: 2,
    note:"Don't buy too much. Don't buy too much. Don't buy too much. Don't buy too much. ",
    status:'pending',
  },
  {
    id: 2,
    name: "Eggs Eggs EggsEggs EggsEggsEggs Eggs EggsEggsEggs",
    quantity: 1,
    note:"12 ones",
    status:'pending',
  },
  {
    id: 3,
    name: "Battery",
    quantity: 2,
    note:"AAA",
    status:'pending',
  },
];

function ShoppingListScreen(props) {
  const [items, setItems] = useState(initialItems);

  return (
    <Screen>
      <View style={styles.headerContainer}>
        <View style={styles.nameContainer}>
            <AppText style={styles.name}>
                Name
            </AppText>
        </View>
        <View style={styles.quantityContainer}>
            <AppText style={styles.quantity}>
                Qty.
            </AppText>
        </View>
        <View style={styles.noteContainer}>
            <AppText style={styles.note}>
                Note
            </AppText>
        </View>
      </View>

      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ShoppingItem
            name={item.name}
            quantity={item.quantity}
            note={item.note}
            status={item.status}
            renderRightActions={() => (
                [
                    <ListItemDeleteAction key="delete" onPress={() => console.log("Delete")} />,
                    <ListItemEditAction key="edit" size={60} onPress={() => console.log("Edit")}/>,
                    <ListItemWishAction key="wish" size={60} onPress={() => console.log("Wish")}/>,
                    <ListItemBuyAction key="buy" onPress={() => console.log("Buy")} />
                ]
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
    headerContainer:{
        flexDirection:'row',
        padding:10,
        borderBottomColor:defaultStyles.colors.lighter,
        borderBottomWidth:1
    },
    nameContainer:{
        width:'25%'
    },
    name:{
        fontWeight:'bold'
    },
    quantityContainer:{
        width:'20%'
    },
    quantity:{
        textAlign:'center',
        fontWeight:'bold'
    },
    noteContainer:{

    },
    note:{
        fontWeight:'bold'
    }

});

export default ShoppingListScreen;
