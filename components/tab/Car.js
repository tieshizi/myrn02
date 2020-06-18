
import React from 'react';
import { View, Text, TextInput, StyleSheet, Image, Button, ActivityIndicator, ScrollView } from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});

export default class Car extends React.Component {
    myclick = () => {
        alert(1)
    }
    render() {
        return (
            <>
                <ScrollView
                    style={styles.container}>
                    <View >
                        <Text onPress={this.myclick}>购物车</Text>
                    </View>
                </ScrollView>
            </>
        )
    }
}

