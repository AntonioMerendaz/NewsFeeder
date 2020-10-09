import React, { Component } from 'react'
import { Text } from 'native-base'
import moment from 'moment';
import { StyleSheet } from 'react-native';

export default class MomentFormatter extends Component {

    constructor(props) {
        super(props);
        this.date = props.time;
    }

    render() {
        const time = moment(this.date || moment.now()).fromNow();
        return (
            <Text note style={styles.timeText}>{time}</Text>
        )
    }
}

const styles = StyleSheet.create({
    timeText: {
        marginHorizontal: 10,
    }
})
