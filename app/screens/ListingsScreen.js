import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import Icon from '../components/Icon'
import {FontAwesome} from '@expo/vector-icons'

import Screen from "../components/Screen";

import {
  EventItem,
  ListItemDeleteAction,
  ListItemSeparator,
} from "../components/Lists";

const initialMessages = [
  {
    id: 1,
    title: " 26 Olive Ave.",
    description: "Alex Bae, Shin Yeong Kim",
    members:2,
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
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default ListingsScreen;
