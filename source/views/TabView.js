import React, { Component } from 'react';
import { Container, Content, Tab, Tabs, Header, Left, Body, Right, Title } from 'native-base';
import { StyleSheet } from 'react-native';
import GenTab from './tabs/gentab';
import TechTab from './tabs/techtab';
import BusiTab from './tabs/busitab';
export default class TabsExample extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <Header style={styles.header} hasTabs>
                        <Left />
                        <Body>
                            <Title style={styles.title}>News Feeder</Title>
                        </Body>
                        <Right />
                    </Header>
                    <Tabs tabBarUnderlineStyle={styles.tabbarunderline}>
                        <Tab tabStyle={styles.tab} activeTabStyle={styles.activetab}
                            textStyle={styles.tabtextstyle} activeTextStyle={styles.activetabtextstyle}
                            heading="General">
                            <GenTab />
                        </Tab>
                        <Tab tabStyle={styles.tab} activeTabStyle={styles.activetab}
                            textStyle={styles.tabtextstyle} activeTextStyle={styles.activetabtextstyle}
                            heading="Technology">
                            <TechTab />
                        </Tab>
                        <Tab tabStyle={styles.tab} activeTabStyle={styles.activetab}
                            textStyle={styles.tabtextstyle} activeTextStyle={styles.activetabtextstyle}
                            heading="Business">
                            <BusiTab />
                        </Tab>
                    </Tabs>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'darkslateblue',
    },
    title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
    tab: {
        backgroundColor: 'darkslateblue',
    },
    activetab: {
        backgroundColor: 'darkslateblue',
    },
    tabtextstyle: {
        color: 'white',
    },
    activetabtextstyle: {
        color: 'white',
    },
    tabbarunderline: {
        backgroundColor: 'white',
    }
});
