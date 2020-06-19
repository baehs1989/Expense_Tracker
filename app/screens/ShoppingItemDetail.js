import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';


import AppText from '../components/AppText'
import Screen from '../components/Screen'
import IconButton from '../components/Buttons/IconButton'
import CircleButton from '../components/Buttons/CircleButton';
import defaultStyles from '../config/styles'

const item = {
        id: 1,
        createdby:"Alex Bae",
        buyer:"Shin Yeong Kim",
        name: "Toilet Paper",
        quantity: 2,
        note: "uy too muco much. Don't buy too much.",
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
                            <View style={styles.th}><AppText>Requester</AppText></View>
                            <View style={styles.td}><AppText>{item.createdby}</AppText></View>
                        </View>
                        <View style={styles.tr}>
                            <View style={styles.th}><AppText>Buyer</AppText></View>
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
                        backgroundColor="green"
                    />
                    <CircleButton 
                        name="heart-o" 
                        type="FontAwesome" 
                        size={30} 
                        onPress={()=>console.log('buy')}
                        backgroundColor="green"
                    />
                    <CircleButton 
                        name="delete" 
                        type="MaterialCommunityIcons" 
                        size={30} 
                        onPress={()=>console.log('buy')}
                        backgroundColor="green"
                    />
                    <CircleButton 
                        name="edit" 
                        type="FontAwesome" 
                        size={30} 
                        onPress={()=>console.log('buy')}
                        backgroundColor="green"
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
        borderWidth:1,
        borderColor:defaultStyles.colors.light
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