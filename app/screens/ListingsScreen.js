import React, { useState } from "react";
import { FlatList, StyleSheet,View } from "react-native";

import Icon from '../components/Icon'
import Screen from "../components/Screen";
import SearchTab from '../components/SearchTab';

import {
  EventItem,
  ListItemSeparator,
} from "../components/Lists";

import ListItemDeleteAction from '../components/Lists/ListItemDeleteAction'
import routes from '../navigation/routes'

import JoinForm from '../components/forms/JoinForm'
import AppModal from '../components/AppModal';


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

function ListingsScreen({navigation}) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);
  const [joinModal, setJoinModal] = useState(false);

  return (
    <Screen>
      
      <View style={styles.headerContainer}>
        <SearchTab 
          onChangeText={()=>console.log('changed')} 
          onClickAdd={()=>console.log('Add')}
          onClickJoin={()=>setJoinModal(true)}
        />
      </View>

      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <EventItem
            title={item.title}
            subTitle={item.description}
            members={item.members}
            IconComponent={
                <Icon name={item.type} backgroundColor={item.color} size={50}/>
            }
            onPress={()=>navigation.navigate(routes.LISTING_DETAIL, item)}
            renderRightActions={() => (
                <ListItemDeleteAction onPress={() => console.log("Delete")} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
      />

      <AppModal
        visible={joinModal}
        innerContainerStyle={{width:'95%', height:250}}
        onClose={()=>setJoinModal(false)}
      >
        <JoinForm/>
      </AppModal>

      {/* <View style={styles.buttonContainer}>
          <AppButton title="" onPress={()=>{}} style={{ width: 100 }} IconComponent={<FontAwesome name="plus-circle" size={25} />} />
      </View> */}


    </Screen>
  );
}

const styles = StyleSheet.create({
  headerContainer:{

  },
  buttonContainer: {
    alignItems: 'center'
  }
});

export default ListingsScreen;
