import React, { Component } from 'react';
import { Dimensions, Modal, Share, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import { Container, Header, Content, Title, Button, Body, Left, Icon, Right } from 'native-base';

const webViewHeight = Dimensions.get('window').height - 56;

class ModalView extends Component {

    constructor(props) {
        super(props);
    }

    onClosingModalView = () => {
        return this.props.onClose();
    }

    onShareButtonPressed = () => {
        const { url, title } = this.props.articleData;
        message = `${title}\n\nRead More @${url}\n\nShared via NewsFeeder App`;
        return Share.share(
            { title, message, url: message },
            { dialogTitle: `Share ${title}` }
        );
    }

    render() {
        const { showModalView, articleData } = this.props;
        const { url } = articleData;
        if (url != undefined) {
            return (
                <Modal
                    animationType="slide"
                    transparent
                    visible={showModalView}
                    onRequestClose={this.onClosingModalView}
                >
                    <Container style={styles.container}>
                        <Header style={styles.header}>
                            <Left>
                                <Button onPress={this.onClosingModalView} transparent>
                                    <Icon name="close" style={styles.navBarIcon} />
                                </Button>
                            </Left>
                            <Body>
                                <Title children={articleData.title} style={styles.modalViewTitle} />
                            </Body>
                            <Right>
                                <Button onPress={this.onShareButtonPressed} transparent>
                                    <Icon name="share" style={styles.navBarIcon} />
                                </Button>
                            </Right>
                        </Header>
                        <Content contentContainerStyle={{ height: webViewHeight }}>
                            <WebView source={{ uri: url }} style={{ flex: 1 }}
                                onError={this.onClosingModalView} startInLoadingState
                                scalesPageToFit
                            />
                        </Content>
                    </Container>
                </Modal>
            );
        } else {
            return null;
        }
    }
}

export default ModalView;

const styles = StyleSheet.create({
    container: {
        margin: 30,
        marginBottom: 0,
        backgroundColor: 'white',
    },
    header: {
        backgroundColor: 'darkslateblue',
        fontSize: 8
    },
    navBarIcon: {
        color: 'white',
        fontSize: 20,
    },
    modalViewTitle: {
        color: 'white',
        fontSize: 16,
    },
    webView: {
        flex: 1,
    },
})