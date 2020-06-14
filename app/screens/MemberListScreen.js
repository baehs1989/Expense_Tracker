import React, { useState } from "react";
import { FlatList, StyleSheet, View, Modal } from "react-native";
import { Searchbar } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';

import AppButton from '../components/Buttons/AppButton';
import Screen from "../components/Screen";
import AppModal from '../components/AppModal';
import ShoppingItemForm from '../components/forms/ShoppingItemForm'

import defaultStyles from '../config/styles';

import AvatarItem from '../components/Lists/ListItems/AvatarItem'
import {
    ListItemSeparator
} from "../components/Lists";
import ListItemDeleteAction from '../components/Lists/ListItemDeleteAction'

const initialItems = [
    {
        id: 1,
        name: "Alex Bae",
        image: require("../assets/icon.png")
    },
    {
        id: 2,
        name: "Shin Yeong Kim",
        image: require("../assets/icon.png")
    }
];

function MemberListScreen({props}) {
    const [items, setItems] = useState(initialItems);
    const [openForm, setOpenForm] = useState(false)


    return (
        <Screen>
            <View style={styles.searchBar}>
                <Searchbar
                    placeholder="Search"
                    onChangeText={() => {}}
                    value={""}
                />
            </View>

            <FlatList
                data={items}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => {
                    return(
                        <AvatarItem
                            name={item.name}
                            renderRightOnPress={{
                                onDelete: () => console.log('Delete'),
                                onEdit: () => console.log("Edit"),
                                onWish: () => console.log("Wish"),
                                onBuy: () => console.log("Buy")
                            }}
                            onLeftSwipe={{
                                onBuy: () => console.log("Buy")
                            }}
                            image={item.image}
                            renderRightActions={() => <ListItemDeleteAction onPress={() => console.log(item)} />}
                        />
                    )
                }}
                ItemSeparatorComponent={ListItemSeparator}
                
            />

        </Screen>
    );
}

const styles = StyleSheet.create({
    searchBar: {
        flexDirection: 'column',
    },
    headerContainer: {
        flexDirection: 'row',
        padding: 10,
        borderBottomColor: defaultStyles.colors.lighter,
        borderBottomWidth: 1
    },
    nameContainer: {
        width: '25%'
    },
    name: {
        fontWeight: 'bold'
    },
    quantityContainer: {
        width: '20%'
    },
    quantity: {
        textAlign: 'center',
        fontWeight: 'bold'
    },
    noteContainer: {

    },
    note: {
        fontWeight: 'bold'
    },
    filter: {
        flex: 1,
        alignItems: 'flex-end',
        paddingRight: 10
    },
    buttonContainer: {
        alignItems: 'center'
    }

});

export default MemberListScreen;
