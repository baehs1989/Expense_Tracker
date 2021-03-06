import React from 'react';
import { Container, Content, ListItem, Text, Radio, Right, Left, Footer } from 'native-base';
import {StyleSheet} from 'react-native';

import AppModal from '../components/AppModal';

function FilterModal({visible, filters, onSelect, onCancel, onOk, selected}){
  return (
    <AppModal visible={visible} onCancel={onCancel} onOk={onOk} innerContainerStyle={{position:'absolute', bottom:0, width:'100%'}}>
        <Container>
            <Content>
                {
                    filters.map(filter => {
                        return (
                            <ListItem key={filter.id} onPress={()=>onSelect(filter.id, filter.label)}>
                                <Left>
                                    <Text>{filter.label}</Text>
                                </Left>
                                <Right>
                                    <Radio selected={selected === filter.id} />
                                </Right>
                            </ListItem>
                        )
                    })
                }
            </Content>
            {/* <Footer>
                <View style={{justifyContent:'center'}}>
                    <AppText>Cancel</AppText>
                </View>
            </Footer> */}
        </Container>
    </AppModal>


  );
}

const styles = StyleSheet.create({
});

export default FilterModal;