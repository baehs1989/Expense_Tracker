import React, { useState } from "react";
import { FlatList, StyleSheet,View } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

import Icon from '../components/Icon'
import Screen from "../components/Screen";
import AppButton from '../components/Buttons/AppButton'

import {
  EventItem,
  ListItemSeparator,
} from "../components/Lists";

import ListItemDeleteAction from '../components/Lists/ListItemDeleteAction'

const initialMessages = [
  {
    id: 1,
    title: " 26 Olive Ave.26 Olive Ave.26 Olive Ave.26 Olive Ave.26 Olive Ave.",
    description: "Alex Bae, Shin Yeong Kim",
    members:999,
    type:'home',
    color:'darkseagreen'
  },
  {
    id: 2,
    title: "Greenview Ave.",
    description: "Jin Soo, Hyung Soo",
    members:2,
    type:'home',
    color:'darkseagreen'
  },
  {
    id: 3,
    title: "Sadari Meeting",
    description: "Jin Soo, Hyung Soo, Ozzy, Choi, Sadari Man",
    members:10,
    type:'calendar',
    color:'gold'
  },
];

function ListingsScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <EventItem
            title={item.title}
            subTitle={item.description}
            members={item.members}
            IconComponent={
                <Icon name={item.type} backgroundColor={item.color} size={70}/>
            }
            onPress={() => console.log("Message selected", item)}
            renderRightActions={() => (
                <ListItemDeleteAction onPress={() => console.log("Delete")} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
      />

      <View style={styles.buttonContainer}>
          <AppButton title="" onPress={()=>{}} style={{ width: 150 }} IconComponent={<FontAwesome name="plus-circle" size={25} />} />
      </View>


    </Screen>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center'
  }
});

export default ListingsScreen;
