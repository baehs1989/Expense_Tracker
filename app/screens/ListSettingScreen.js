import React from "react";
import { StyleSheet, View, TouchableOpacity, Clipboard } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../config/styles";
import Screen from "../components/Screen";
import AppText from "../components/AppText";

function ListSettingScreen(props) {
  return (
    <Screen style={styles.screen}>

        {/* <ListItem
          title="Alex Bae"
          subTitle="baehs89@gmail.com"
          IconComponent={
              <Icon
                name="account"
                backgroundColor={defaultStyles.colors.light}
                iconColor="white"
                size={70}
              />
          }
        /> */}
        <TouchableOpacity onPress={()=>{}}>
            <View style={styles.container}>
                
                <View style={styles.title}>
                    <AppText>Group Name</AppText>
                </View>
                <View style={styles.content}>
                    <AppText numberOfLines={1}>This is the name</AppText>
                </View>
                <View style={styles.arrow}>
                    <MaterialCommunityIcons
                        color={defaultStyles.colors.medium}
                        name="chevron-right"
                        size={25}
                />
                </View>
            
            </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>Clipboard.setString('KDI232DFEDZD')}>
            <View style={styles.container}>
                <View style={styles.title}>
                    <AppText>Invite Code</AppText>
                </View>
                <View style={styles.content}>
                    <AppText numberOfLines={1}>KDI232DFEDZD</AppText>
                </View>
            </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{}}>
            <View style={styles.container}>
                <View style={styles.buttonContainer}>
                    <AppText>Leave Group</AppText>
                </View>
            </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{}}>
            <View style={styles.container}>
                <View style={styles.buttonContainer}>
                    <AppText>Deactivate Group</AppText>
                </View>
            </View>
        </TouchableOpacity>

    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: defaultStyles.colors.lighter,
  },
  container: {
    marginVertical: 15,
    flexDirection:'row',
    backgroundColor:defaultStyles.colors.white
  },
  title:{
      flex:5,
      justifyContent:'center',
      height:80,
      padding:10
  },
  content:{
      flex:10,
      justifyContent:'center',
      height:80,
      padding:5
  },
  arrow:{
      flex:1,
      justifyContent:'center',
      height:80,
      padding:5
  },
  buttonContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    height:80,
    padding:5,
  }
});

export default ListSettingScreen;
