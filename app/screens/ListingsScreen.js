import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet,View } from "react-native";

import Icon from '../components/Icon'
import Screen from "../components/Screen";
import SearchTab from '../components/SearchTab';
import firebase from '../firebase/firebase';
import userAuth from '../auth/userAuth';

import {
  EventItem,
  ListItemSeparator,
} from "../components/Lists";

import ListItemDeleteAction from '../components/Lists/ListItemDeleteAction'
import routes from '../navigation/routes'

import JoinForm from '../components/forms/JoinForm'
import GroupForm from '../components/forms/GroupForm'
import AppModal from '../components/AppModal';


const initialMessages = [
  {
    id: 1,
    title: " 26 Olive Ave.",
    description: "Alex Bae, Jenna Kim",
    members:2,
    type:'home',
    color:'darkseagreen'
  },
  {
    id: 2,
    title: "15 Greenview Ave.",
    description: "Jake, Alex",
    members:2,
    type:'home',
    color:'darkseagreen'
  },
  {
    id: 3,
    title: "BBQ Party",
    description: "Alex Bae, Ozzy, Jason, Sadari Man",
    members:4,
    type:'calendar',
    color:'gold'
  },
];

function ListingsScreen({navigation}) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);
  const [joinModal, setJoinModal] = useState(false);
  const [createModal, setCreateModal] = useState(false);
  const [members, setMembers] = useState({})
  const [groups, setGroups] = useState([])
  const {user} = userAuth()

  const handleGroupCreate = (new_group) => {
    console.log(new_group)
    setCreateModal(false)
  }

  const handleGroupJoin = (new_group) => {
    console.log(new_group)
    setJoinModal(false)
  }

  const loadGroup = async() =>{
    let groups = await firebase.firestore().collection("Group").where('__name__', 'in', user.groups).get().then(snapshot=>{
      let groups = snapshot.docs.map(doc=>doc.data())
      setGroups(groups)
      return groups
    })

    let promises = []
    groups.forEach(async(group)=>{
      promises.push(
        new Promise((resolve,reject) => {
          firebase.firestore().collection("User").where('__name__', 'in', group.members).get().then(snapshot=>{
            resolve(snapshot.docs.map(doc=>{
              return {
                id : doc.id,
                ...doc.data()
              }
            }))
          })
        })
      )
    })

    Promise.all(promises).then(values => {
      let members = {}
      for (let x of values){
        for (let y of x){
          members[y.id] = y
        }
      }
      setMembers(members)
    })
  }

  useEffect(()=>{
    loadGroup()
  },[])

  console.log("Group", groups)
  console.log('Members', members)

  return (
    <Screen>
      
      <View style={styles.headerContainer}>
        <SearchTab 
          onChangeText={()=>console.log('changed')} 
          onClickAdd={()=>setCreateModal(true)}
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
      <JoinForm onSubmit={handleGroupJoin}/>
      </AppModal>

      <AppModal
        visible={createModal}
        innerContainerStyle={{width:'95%', height:300}}
        onClose={()=>setCreateModal(false)}
      >
        <GroupForm onSubmit={handleGroupCreate}/>
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
