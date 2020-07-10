import React from 'react';
import {View, StyleSheet, ScrollView, Dimensions} from 'react-native';
import { Container, Header, View as BaseView, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon as BaseIcon } from 'native-base';

import Screen from '../components/Screen';
import AppText from '../components/AppText';
import Icon from '../components/Icon';
import {ListItem} from '../components/Lists';
import defaultStyles from '../config/styles';
import routes from '../navigation/routes';

var iconSize = 50;
const window = Dimensions.get('window')

function ListDetailScreen({navigation}){
  const cards = [
    <View style={styles.amountCard}>
      <AppText style={styles.amount}>$1,500</AppText>
      <AppText style={styles.period}><AppText style={styles.periodHL}>21</AppText> Days left in billing period</AppText>
    </View>,
    <View style={styles.amountCard}>
      <AppText>Overall</AppText>
      <AppText style={styles.amount}>$3,000</AppText>
      <AppText style={styles.period}><AppText style={styles.periodHL}>21</AppText> Days left in billing period</AppText>
    </View>
  ]

  return (
    <Screen style={{backgroundColor:defaultStyles.colors.lighter}}>
       
        {/* <View style={styles.amountContainer}>
          <Container style={{height:130, backgroundColor:defaultStyles.colors.lighter}}>
              <DeckSwiper
                  dataSource={cards}
                  renderItem={item =>
                    <>
                      {item}
                    </>
                  }
                />

          </Container>
        </View> */}

      <View style={styles.containerStyle} >
        <View style={styles.sliderContainerStyle} >
          {/* <View style={styles.slider}>
          </View> */}
        </View>
      </View>

      <View style={{width:'100%', alignItems:'center', paddingVertical:20}}>
        <AppText style={{fontSize:45, fontWeight:'900', color:'green'}}>$3,000</AppText>
        <AppText style={{fontSize:20}}>Overall Balance</AppText>
      </View>

      <View style={styles.amountCard}>
        <AppText style={styles.amount}>$1,500</AppText>
        <AppText style={styles.period}><AppText style={styles.periodHL}>21</AppText> Days left in billing period</AppText>
      </View> 

      <View style={styles.optionContainer}>
        <ScrollView style={styles.scrollView}>
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
              title="Shopping List"
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
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center',
    alignSelf:'center',
    width: '80%',
    height: 100
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
  scrollView:{
    marginTop:10
  },
  option: {
    marginVertical: 5,
  },

  containerStyle: {
    alignSelf: 'center',
    width: window.width,
    overflow: 'hidden',
    height: 200,
    position:'absolute'
},
sliderContainerStyle: {
    borderRadius: window.width * 1.5,
    width: window.width * 3,
    height: window.width * 3,
    marginLeft: -(window.width / 1),
    position: 'absolute',
    bottom: 0,
    overflow: 'hidden',
    backgroundColor:defaultStyles.colors.light
},
// slider: {
//     height: window.width / 1.7,
//     width: window.width,
//     position: 'absolute',
//     bottom: 0,
//     marginLeft: window.width / 2,
//     backgroundColor: '#9DD6EB'
// }

});

export default ListDetailScreen;