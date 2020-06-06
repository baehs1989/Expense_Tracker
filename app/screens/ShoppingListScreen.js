import React, { useState } from "react";
import { FlatList, StyleSheet, View, Modal } from "react-native";
import { Searchbar } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';

import AppText from '../components/AppText';
import AppButton from '../components/AppButton';
import Screen from "../components/Screen";
import IconButton from '../components/IconButton';
import FilterModal from '../components/FilterModal';

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
    }
]

const initialItems = [
    {
        id: 1,
        name: "Toilet Paper",
        quantity: 2,
        note: "Don't buy too much. Don't buy too much. Don't buy too much. Don't buy too much. ",
        status: 'pending',
    },
    {
        id: 2,
        name: "Eggs Eggs EggsEggs EggsEggsEggs Eggs EggsEggsEggs",
        quantity: 1,
        note: "12 ones",
        status: 'pending',
    },
    {
        id: 3,
        name: "Battery",
        quantity: 2,
        note: "AAA",
        status: 'pending',
    },
];

function ShoppingListScreen(props) {
    const [items, setItems] = useState(initialItems);
    const [openFilter, setOpenFilter] = useState(false)

    const onFilterSelect = id => {
        console.log(id)
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
                        selected={"default"}
                        visible={openFilter}
                        filters = {filters}
                        onSelect = {onFilterSelect}
                        onCancel = {()=>console.log('cancel')}
                    />

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
                        renderRightOnPress={{
                            onDelete: () => console.log('Delete'),
                            onEdit: () => console.log("Edit"),
                            onWish: () => console.log("Wish"),
                            onBuy: () => console.log("Buy")
                        }}
                        onLeftSwipe={{
                            onBuy: () => console.log("Buy")
                        }}
                    />
                )}
                ItemSeparatorComponent={ListItemSeparator}
            />

            <View style={styles.buttonContainer}>
                <AppButton title="" style={{ width: 100 }} IconComponent={<FontAwesome name="plus-circle" size={20} />} />
            </View>

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
