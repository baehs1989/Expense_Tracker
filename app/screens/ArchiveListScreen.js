import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { Searchbar } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';

import AppText from '../components/AppText';
import AppButton from '../components/Buttons/AppButton';
import Screen from "../components/Screen";
import IconButton from '../components/Buttons/IconButton';
import FilterModal from '../components/FilterModal';
import AppModal from '../components/AppModal';
import ShoppingItemForm from '../components/forms/ShoppingItemForm'

import defaultStyles from '../config/styles';


import {
    ListItemSeparator
} from "../components/Lists";
import ArchiveItem from "../components/Lists/ListItems/ArchiveItem";

const initialItems = [
    {
        id: 1,
        date:"April 05, 2019 - May 05, 2019"
    },
    {
        id: 2,
        date:"May 05, 2019 - June 05, 2019"
    },
    {
        id: 3,
        date:"June 05, 2019 - July 05, 2019"
    },
];

function ArchiveListScreen({props}) {
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
                    placeholder="Search"
                    onChangeText={() => {}}
                    value={""}
                />
            </View>

            <View style={styles.headerContainer}>
                <View style={styles.dateContainer}>
                    <AppText style={styles.date}>
                        Date
                    </AppText>
                </View>
            </View>

            <FlatList
                data={items}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => {
                    return(
                        <ArchiveItem
                            date={item.date}
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
    dateContainer: {
        flex:1
    },
    date: {
        fontWeight: 'bold'
    }

});

export default ArchiveListScreen;
