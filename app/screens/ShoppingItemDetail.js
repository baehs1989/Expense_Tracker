import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';


import AppText from '../components/AppText'
import Screen from '../components/Screen'
import IconButton from '../components/Buttons/IconButton'
import CircleButton from '../components/Buttons/CircleButton';
import defaultStyles from '../config/styles'
import colors from '../config/colors';

const item = {
        id: 1,
        createdby:"Alex Bae",
        lastModifedby:"Alex Bae",
        buyer:"Shin Yeong Kim",
        name: "Toilet Paper",
        price:40,
        quantity: 2,
        note: "uy too muco much. Don't buy too much. uy too muco much. Don't buy too much. uy too muco much. Don't buy too much.",
        status: 1,
}

function ShoppingItemDetail(props){
  return (
    <Screen>
        <View style={styles.container}>
            <View>
                <ScrollView style={{height:'70%'}}>
                    <View style={styles.table}>
                        <View style={styles.tr}>
                            <View style={styles.th}><AppText>Item</AppText></View>
                            <View style={styles.td}><AppText>{item.name}</AppText></View>
                        </View>
                        <View style={styles.tr}>
                            <View style={styles.th}><AppText>Quantity</AppText></View>
                            <View style={styles.td}><AppText>{item.quantity}</AppText></View>
                        </View>
                        <View style={styles.tr}>
                            <View style={styles.th}><AppText>Price</AppText></View>
                            <View style={styles.td}><AppText>{item.price}</AppText></View>
                        </View>
                        <View style={styles.tr}>
                            <View style={styles.th}><AppText>Bought</AppText></View>
                            <View style={styles.td}><AppText>{item.buyer}</AppText></View>
                        </View>
                        <View style={styles.tr}>
                            <View style={styles.th}><AppText>Note</AppText></View>
                            <View style={styles.td}><AppText>{item.note}</AppText></View>
                        </View>
                    </View>
                </ScrollView>

                <View style={styles.buttonContainer}>
                    <CircleButton 
                        name="cart-plus" 
                        type="FontAwesome" 
                        size={30} 
                        onPress={()=>console.log('buy')}
                    />
                    <CircleButton 
                        name="heart-o" 
                        type="FontAwesome" 
                        size={30} 
                        onPress={()=>console.log('buy')}
                    />
                    <CircleButton 
                        name="delete" 
                        type="MaterialCommunityIcons" 
                        size={30} 
                        onPress={()=>console.log('buy')}
                    />
                    <CircleButton 
                        name="edit" 
                        type="FontAwesome" 
                        size={30} 
                        onPress={()=>console.log('buy')}
                    />
                </View>
            </View>
        </View>
    </Screen>

  );
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    table:{
        backgroundColor:defaultStyles.colors.white,
        borderWidth:1,
        borderColor:defaultStyles.colors.light,
        padding:10,
        borderRadius:10
    },
    tr:{
        flexDirection:'row'
    },
    th:{
        padding:10,
        flex:2,
        borderWidth:0.5,
        borderColor:defaultStyles.colors.light
    },
    td:{
        padding:10,
        flex:5,
        borderWidth:0.5,
        borderColor:defaultStyles.colors.light
    },
    buttonContainer:{
        marginVertical:20,
        flexDirection:'row',
        justifyContent:'center',
    },
});

export default ShoppingItemDetail;