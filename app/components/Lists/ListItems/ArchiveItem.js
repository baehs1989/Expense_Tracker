import React, {useRef} from "react";
import { View, StyleSheet, TouchableHighlight } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

import AppText from "../../AppText";
import colors from "../../../config/colors";

function ArchiveItem({
  date,
  disabled,
}) {

  return (
    <Swipeable>
      <TouchableHighlight underlayColor={colors.light} onPress={()=>{}}>
        <View style={[styles.container, disabled?styles.container_disabled:{}]}>
            <View style={styles.detailsContainer}>
                <View style={styles.dateContainer}>
                    <AppText style={[styles.date, disabled?styles.text_disabled:{}]} numberOfLines={1}>
                        {date}
                    </AppText>
                </View>
            </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
    container_disabled:{
      opacity:0.5
    },
    text_disabled:{
      color:colors.light
    },
    container: {
        alignItems: "center",
        flexDirection: "row",
        padding:15,
        backgroundColor: colors.white,
    },
    detailsContainer: {
        flexDirection:'row',
        flex:1
    },
    dateContainer:{
        flex:1
    },
    date:{
        
    }
});

export default ArchiveItem;
