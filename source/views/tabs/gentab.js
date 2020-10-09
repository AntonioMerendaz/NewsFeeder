import React, { Component } from 'react';
import { Container, Content, List, Text } from 'native-base';
import { fetchData } from '../../services/fetchData';
import { Alert, StyleSheet, View, ActivityIndicator } from 'react-native';
import ListRowItem from '../../components/listRowItem';
import ModalView from '../../components/modalView';
export default class GenTab extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            data: null,
            setModalViewVisible: false,
            modalViewArticleData: {}
        }
    }

    viewButtonPressed = (articleData) => {
        this.setState({
            setModalViewVisible: true,
            modalViewArticleData: articleData
        })
    }

    closeModalViewButtonPressed = () => {
        this.setState({
            setModalViewVisible: false,
            modalViewArticleData: {}
        })
    }
    componentDidMount() {
        fetchData().then(data => {
            this.setState({
                isLoading: false,
                data: data
            });
        }, error => {
            Alert.alert('Error', 'Could not fetch the data!')
        }
        )
    }
    render() {
        console.log(this.state.data);

        let view = this.state.isLoading ? (
            <View>
                <ActivityIndicator animating={this.state.isLoading} style={styles.activityIndicator} />
                <Text style={styles.loadingText} children="Please wait..." />
            </View>
        ) : (
                <List
                    dataArray={this.state.data}
                    renderRow={(item) => {
                        return (
                            <ListRowItem onPress={this.viewButtonPressed} data={item} />
                        )
                    }} />
            )
        return (
            <Container>
                <Content>
                    {view}
                </Content>
                <ModalView
                    showModalView={this.state.setModalViewVisible}
                    articleData={this.state.modalViewArticleData}
                    onClose={this.closeModalViewButtonPressed}
                />
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    loadingText: {
        marginTop: 10,
        textAlign: 'center',
    },
    activityIndicator: {
        color: 'darkslateblue',
        marginTop: 10,
    },
});