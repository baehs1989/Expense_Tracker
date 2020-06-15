import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';
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
export default class DeckSwiperExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <View>
          <DeckSwiper
            dataSource={cards}
            renderItem={item =>
              <Card style={{ elevation: 3 }}>
                <CardItem cardBody>
                    <View style={{height:500}}>
                        <Text>{item.text}</Text>
                    </View>
                    
                </CardItem>
              </Card>
            }
          />
        </View>
      </Container>
    );
  }
}