
import React from 'react';
import { View, Text, TextInput, StyleSheet, Image, Button, ActivityIndicator, ScrollView } from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});

export default class Me extends React.Component {

    render() {
        return (
            <>
                <ScrollView
                    style={styles.container}>
                    <View>
                        <Text>个人</Text>
                    </View>
                </ScrollView>
            </>
        )
    }
}

