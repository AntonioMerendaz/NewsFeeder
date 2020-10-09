import React, { Component } from 'react';
import { ListItem, Left, Right, Thumbnail, Body, View, Text, Button } from 'native-base';
import { StyleSheet } from 'react-native';
import MomentFormatter from './momentFormatter';

export default class ListRowItem extends Component {
    constructor(props) {
        super(props);
        this.data = props.data;
    }

    handlePress = () => {
        const { url, title } = this.data;
        this.props.onPress({ url, title });
    }

    render() {
        return (
            <ListItem thumbnail>
                <Left>
                    <Thumbnail style={styles.thumbnail} square source={{
                        uri: this.data.urlToImage != null ?
                            this.data.urlToImage : 'https://www.freeiconspng.com/uploads/no-image-icon-15.png'
                    }} />
                </Left>
                <Body>
                    <Text numberOfLines={2}>{this.data.title}</Text>
                    <Text note numberOfLines={2}>{this.data.description}</Text>
                    <View style={styles.sourceDateView}>
                        <Text note style={styles.sourceText} numberOfLines={2}>{this.data.source.name}</Text>
                        <MomentFormatter moment={this.data.publishedAt} />
                    </View>
                </Body>
                <Right>
                    <Button onPress={this.handlePress} transparent>
                        <Text style={styles.buttonText}>⌃</Text>
                    </Button>
                </Right>
            </ListItem>
        );
    }
}

const styles = StyleSheet.create({
    buttonText: {
        color: 'darkslateblue',
        fontWeight: 'bold',
        fontSize: 24,
    },
    sourceDateView: {
        flex: 1,
        flexDirection: 'row',
    },
    sourceText: {
        color: "#777",
    },
    thumbnail: {
        width: 70,
        height: 70,
    }
});