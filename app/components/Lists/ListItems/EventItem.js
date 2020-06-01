import React from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import { MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";

import Swipeable from "react-native-gesture-handler/Swipeable";

import AppText from "../../AppText";
import colors from "../../../config/colors";
import defaultStyles from '../../../config/styles';

//extended version from ListItem(default)
function EventItem({
  title,
  subTitle,
  members,
  image,
  IconComponent,
  onPress,
  renderRightActions,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.container}>
          {IconComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailsContainer}>

            <View style={styles.headerContainer}>
                <View style={styles.titleContainer}>
                    <AppText style={styles.title} numberOfLines={1}>
                        {title} 
                    </AppText>
                </View>
                <View style={styles.membersContainer}>
                    <AppText style={styles.members}>
                    <FontAwesome name="user" color={styles.members.color} size={defaultStyles.text.fontSize}/> {members}
                    </AppText>
                </View>
            </View>

            {subTitle && (
              <AppText style={styles.subTitle} numberOfLines={1}>
                {subTitle}
              </AppText>
            )}

          </View>
          <MaterialCommunityIcons
            color={colors.medium}
            name="chevron-right"
            size={25}
          />
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    padding: 15,
    backgroundColor: colors.white,
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  subTitle: {
    color: colors.medium,
  },
  headerContainer:{
    flexDirection:"row"
  },
  titleContainer:{
    flex:1
  },
  title: {
    fontWeight: "500"
  },
  membersContainer:{
  },
  members:{
      color:colors.light
  }
});

export default EventItem;
