import React, { useState } from "react";
import { FlatList, StyleSheet, View, Modal } from "react-native";
import { Searchbar } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';

import AppText from '../components/AppText';
import AppButton from '../components/Buttons/AppButton';
import Screen from "../components/Screen";
import IconButton from '../components/Buttons/IconButton';
import FilterModal from '../components/FilterModal';
import AppModal from '../components/AppModal';
import ShoppingItemForm from '../components/ShoppingItemForm'

import defaultStyles from '../config/styles';


import {
    ShoppingItem,
    ListItemSeparator
} from "../components/Lists";

const filters = [
    {
        id:'default',
        label:'Default'
    },
    {
        id:'filter1',
        label:'Filter 1'
    },
    {
        id:'filter2',
        label:'Filter 2'
    },
    {
        id:'filter3',
        label:'Filter 3'
    },
    {
        id:'filter4',
        label:'Filter 4'
    },
    {
        id:'filter5',
        label:'Filter 5'
    }
]

//status : pending, wish, bought
//          1        2       3
const initialItems = [
    {
        id: 1,
        createdby:"",
        buyer:"",
        name: "Toilet Paper",
        quantity: 2,
        note: "Don't buy too much. Don't buy too much. Don't buy too much. Don't buy too much. ",
        status: 1,
    },
    {
        id: 2,
        createdby:"",
        buyer:"Alex Bae",
        name: "Eggs Eggs EggsEggs EggsEggsEggs Eggs EggsEggsEggs",
        quantity: 1,
        note: "12 ones",
        status: 2,
    },
    {
        id: 3,
        createdby:"",
        buyer:"",
        name: "Battery",
        quantity: 2,
        note: "AAA",
        status: 1,
    },
];

function ShoppingListScreen(props) {
    const [items, setItems] = useState(initialItems);
    const [selectedItem, setSelectedItem] = useState('default')
    const [openFilter, setOpenFilter] = useState(false)
    const [openForm, setOpenForm] = useState(false)

    const onFilterSelect = id => {
        setSelectedItem(id)
    }

    return (
        <Screen>
            <View style={styles.searchBar}>
                <Searchbar
                    placeholder="Type Here..."
                    onChangeText={() => {}}
                    value={""}
                />
            </View>

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
                <View style={styles.filter}>
                    <IconButton
                        onPress={() => setOpenFilter(true)}
                        type="FontAwesome"
                        name="filter"
                        size={20}
                    />

                    <FilterModal
                        selected={selectedItem}
                        visible={openFilter}
                        filters = {filters}
                        onSelect = {onFilterSelect}
                        onCancel = {()=>setOpenFilter(false)}
                        onOk = {()=>setOpenFilter(false)}
                    />

                </View>
            </View>

            <FlatList
                data={items}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => {
                    return(
                        <ShoppingItem
                            name={item.name}
                            quantity={item.quantity}
                            note={item.note}
                            status={item.status}
                            buyer={item.buyer}
                            renderRightOnPress={{
                                onDelete: () => console.log('Delete'),
                                onEdit: () => console.log("Edit"),
                                onWish: () => console.log("Wish"),
                                onBuy: () => console.log("Buy")
                            }}
                            onLeftSwipe={{
                                onBuy: () => console.log("Buy")
                            }}
                            disabled = {item.status !== 1 ? true : false}
                        />
                    )
                }}
                ItemSeparatorComponent={ListItemSeparator}
            />

            <View style={styles.buttonContainer}>
                <AppButton title="" onPress={()=>setOpenForm(true)} style={{ width: 150 }} IconComponent={<FontAwesome name="plus-circle" size={25} />} />
            </View>

            <AppModal visible={openForm} onCancel={()=>setOpenForm(false)} innerContainerStyle={{width:'90%', height:'50%'}}>
                <ShoppingItemForm/>
            </AppModal>

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

export default ShoppingListScreen;