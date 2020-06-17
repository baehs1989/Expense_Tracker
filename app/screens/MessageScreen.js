import React, { useState } from "react";
import { FlatList, StyleSheet} from "react-native";

import Screen from "../components/Screen";
import ListItemDeleteAction from '../components/Lists/ListItemDeleteAction'
import ListItem from '../components/Lists/ListItems/ListItem'
import ListItemSeparator from '../components/Lists/ListItemSeparator'


const initialMessages = [
  {
    id: 1,
    title: "Mosh Hamedani",
    description: "Hey! Is this item still available?",
  },
  {
    id: 2,
    title: "Mosh Hamedani",
    description:
      "I'm interested in this item. When will you be able to post it?",
  },
];

function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);

  const handleDelete = (message) => {
    // Delete the message from messages
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            onPress={() => console.log("Message selected", item)}
            renderRightActions={() => (
                <ListItemDeleteAction onPress={() => console.log("Delete")} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
      />

    </Screen>
  );
}

const styles = StyleSheet.create({});

export default MessagesScreen;
