import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';

import Screen from '../components/Screen';
import AppText from '../components/AppText';
import Icon from '../components/Icon';
import {ListItem} from '../components/Lists';
import defaultStyles from '../config/styles';
import routes from '../navigation/routes';

var iconSize = 55;

function ListDetailScreen({navigation}){
  return (
    <Screen style={{backgroundColor:defaultStyles.colors.lighter}}>
       
       <View style={styles.amountContainer}>
        <View style={styles.amountCard}>
          <AppText style={styles.amount}>$1,500</AppText>
          <AppText style={styles.period}><AppText style={styles.periodHL}>21</AppText> Days left in billing period</AppText>
        </View>
       </View>

      <View style={styles.optionContainer}>
        <ScrollView>
          <View style={styles.option}>
            <ListItem
              title="Members"
              IconComponent={
                  <Icon
                    name="users"
                    backgroundColor={defaultStyles.colors.light}
                    iconColor="white"
                    type="FontAwesome"
                    size={iconSize}
                  />
              }
            />
          </View>
          <View style={styles.option}>
            <ListItem
              title="List"
              onPress={() => navigation.navigate(routes.SHOPPING_LIST)}
              IconComponent={
                  <Icon
                    name="view-list"
                    backgroundColor={defaultStyles.colors.light}
                    iconColor="white"
                    size={iconSize}
                  />
              }
            />
          </View>
          <View style={styles.option}>
            <ListItem
              title="Wish List"
              IconComponent={
                  <Icon
                    name="heart"
                    backgroundColor={defaultStyles.colors.light}
                    iconColor="white"
                    size={iconSize}
                  />
              }
            />
          </View>
          <View style={styles.option}>
            <ListItem
              title="Purchased"
              IconComponent={
                  <Icon
                    name="cart"
                    backgroundColor={defaultStyles.colors.light}
                    iconColor="white"
                    size={iconSize}
                  />
              }
            />
          </View>

          <View style={styles.option}>
            <ListItem
              title="Archive"
              IconComponent={
                  <Icon
                    name="archive"
                    backgroundColor={defaultStyles.colors.light}
                    iconColor="white"
                    size={iconSize}
                  />
              }
            />
          </View>


          <View style={styles.option}>
            <ListItem
              title="Settings"
              IconComponent={
                  <Icon
                    name="settings"
                    backgroundColor={defaultStyles.colors.light}
                    iconColor="white"
                    size={iconSize}
                  />
              }
            />
          </View>


        </ScrollView>
      </View>


    </Screen>
  );
}

const styles = StyleSheet.create({
  amountContainer:{
    alignItems:'center',
    justifyContent:'center',
    height:'20%',
    marginBottom:5
  },
  amountCard:{
    backgroundColor:defaultStyles.colors.white,
    borderRadius:25,
    alignItems:'center',
    justifyContent:'center',
    height:150,
    width: '90%'
  },
  amount:{
    fontSize:45,
    fontWeight:'900',
    color:'green'
  },
  period:{
    fontSize:13
  },
  periodHL:{
    fontSize:13,
    color:'red'
  },
  optionContainer:{
    height:'80%'
  },
  option: {
    marginVertical: 5,
  },
});

export default ListDetailScreen;