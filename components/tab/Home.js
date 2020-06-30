
import React from 'react';
import { View, Text, TextInput, StyleSheet, Image, Button, ActivityIndicator, ScrollView, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux'
import { Carousel } from "@ant-design/react-native";

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#fff',
    },
    box: {
        width: '33%',
        alignItems: 'center',
        marginTop: 10
    },
    text: {
        color: '#fff',
        fontSize: 36,
    },
});

export default class Home extends React.Component {

    onPressLink = () => {
        Actions.movie()
    }

    render() {
        return (
            <ScrollView
                style={{ width: '100%' }}>
                <View onPress={this.myclick}>
                    <View>
                        <View >
                            <Carousel
                                style={styles.wrapper}
                                selectedIndex={2}
                                autoplay
                                infinite
                            >
                                <View >
                                    <Image
                                        style={{
                                            resizeMode: "cover",
                                            width: '100%',
                                            height: 200
                                        }}
                                        source={require("../../images/01.jpg")}
                                    />
                                </View>
                                <View>
                                    <Image
                                        style={{
                                            resizeMode: "cover",
                                            width: '100%',
                                            height: 200
                                        }}
                                        source={require("../../images/02.jpg")}
                                    />
                                </View>
                                <View >
                                    <Image
                                        style={{
                                            resizeMode: "cover",
                                            width: '100%',
                                            height: 200
                                        }}
                                        source={require("../../images/03.jpg")}
                                    />
                                </View>
                                <View >
                                    <Image
                                        style={{
                                            resizeMode: "cover",
                                            width: '100%',
                                            height: 200
                                        }}
                                        source={require("../../images/04.jpg")}
                                    />
                                </View>
                            </Carousel>
                        </View>

                        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                            <View style={styles.box}>
                                <Image
                                    style={{ width: 100, height: 100 }}
                                    source={require("../../images/04.jpg")}></Image>
                                <Text>内容1</Text>
                            </View>
                            <View style={styles.box}>
                                <Image style={{ width: 100, height: 100 }} source={require("../../images/05.jpg")}></Image>
                                <Text>内容2</Text>
                            </View>
                            <View style={styles.box}>
                                <Image style={{ width: 100, height: 100 }} source={require("../../images/06.jpg")}></Image>
                                <Text>内容3</Text>
                            </View>
                            <View style={styles.box}>
                                <Image style={{ width: 100, height: 100 }} source={require("../../images/07.jpg")}></Image>
                                <Text>内容4</Text>
                            </View>

                            <TouchableHighlight style={styles.box} onPress={this.onPressLink} underlayColor='white'>
                                <View >
                                    <Image style={{ width: 100, height: 100 }} source={require("../../images/08.jpg")}></Image>
                                    <Text style={{ textAlign: 'center' }}>电影列表</Text>
                                </View>

                            </TouchableHighlight>

                            <View style={styles.box}>
                                <Image style={{ width: 100, height: 100 }} source={require("../../images/09.jpg")}></Image>
                                <Text>内容</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

