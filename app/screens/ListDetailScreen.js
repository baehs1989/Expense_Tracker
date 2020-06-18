import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import { Container, Header, View as BaseView, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon as BaseIcon } from 'native-base';

import Screen from '../components/Screen';
import AppText from '../components/AppText';
import Icon from '../components/Icon';
import {ListItem} from '../components/Lists';
import defaultStyles from '../config/styles';
import routes from '../navigation/routes';
import DeckSwiperExample from '../components/DeckSwiperExample'

var iconSize = 50;

const cards = [
  {
    text: 'Card One',
    name: 'One',
    image: require('../assets/background.jpg'),
  },
  {
    text: 'Card Two',
    name: 'Two',
    image: require('../assets/background.jpg'),
  },
];

function ListDetailScreen({navigation}){
  return (
    <Screen style={{backgroundColor:defaultStyles.colors.lighter}}>
       

          <View style={styles.amountContainer}>
            <Container style={{height:130, backgroundColor:defaultStyles.colors.lighter}}>
                <DeckSwiper
                    dataSource={cards}
                    renderItem={item =>
                          <View style={styles.amountCard}>
                            <AppText style={styles.amount}>$1,500</AppText>
                            <AppText style={styles.period}><AppText style={styles.periodHL}>21</AppText> Days left in billing period</AppText>
                          </View>
                    }
                  />

            </Container>
          </View>





      <View style={styles.optionContainer}>
        <ScrollView>
          <View style={styles.option}>
            <ListItem
              title="Members"
              onPress={() => navigation.navigate(routes.MEMBER_LIST)}
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
              onPress={()=>navigation.navigate(routes.WISH_LIST)}
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
              title="Archive"
              onPress={()=>navigation.navigate(routes.ARCHIVE)}
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
              onPress={()=>navigation.navigate(routes.LIST_SETTING)}
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
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    height:150
  },
  amountCard:{
    backgroundColor:defaultStyles.colors.white,
    borderRadius:25,
    alignItems:'center',
    justifyContent:'center',
    alignSelf:'center',
    width: '80%',
    height: 130
  },
  amount:{
    fontSize:35,
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
    flex:1
  },
  option: {
    marginVertical: 5,
  },
});

export default ListDetailScreen;