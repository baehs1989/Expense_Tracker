import React, { useState } from "react";
import { FlatList, StyleSheet, View} from "react-native";

import Screen from "../components/Screen";
import ListItemDeleteAction from '../components/Lists/ListItemDeleteAction'
import MessageItem from '../components/Lists/ListItems/MessageItem'
import ListItemSeparator from '../components/Lists/ListItemSeparator'
import SearchTab from '../components/SearchTab'
import routes from '../navigation/routes';

const initialMessages = [
  {
    id: 1,
    title: "Your monthly bill is ready for Greenview ave..",
    description: "2020-02-25",
    groupID:1
  },
  {
    id: 2,
    title: "Your bill is ready for 2019 Sadari summer tournament.",
    description:"2020-02-01",
    groupID:2
  },
];

function MessagesScreen({navigation}) {
  const [messages, setMessages] = useState(initialMessages);
  

  const handleDelete = (message) => {
    // Delete the message from messages
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <View>
        <SearchTab onChangeText={()=>console.log('changed')}/>
      </View>

      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <MessageItem
            title={item.title}
            subTitle={item.description}
            onPress={() => navigation.navigate(routes.MESSAGE_DETAILS)}
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
