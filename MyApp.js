import React from 'react'
import { View, Text, TextInput, StyleSheet, Image, Button, ActivityIndicator, ScrollView } from 'react-native'

const styles = StyleSheet.create({
    InputView: {
        width: '100%',
    },


});


export default class MyApp extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            loading: true
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ loading: false })
        }, 3000)
    }

    // 在rn中不能使用网页中的所有标签，rn 提供了view组件一系列基础标签，需要把这些标签从react-native中导入，所有文本必须使用Text组件进行包裹
    render() {
        return (
            <View>
                <ScrollView style={{ width: '100%' }}>

                    <ActivityIndicator animating={this.state.loading} size="small" color="#00ff00" />

                    <Text>666667</Text>
                    <TextInput defaultValue='哈哈' secureTextEntry={true} style={styles.InputView}></TextInput>

                    <Image
                        style={{
                            resizeMode: "cover",
                            width: '100%',
                            height: 300
                        }}
                        source={require("./images/e1.jpg")}
                    />
                    <Image
                        style={{
                            resizeMode: "cover",
                            width: '100%',
                            height: 100
                        }}
                        source={{ uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592276797161&di=f394f41af6096bcb4dcb2d7bc8df0e43&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201509%2F17%2F20150917151900_SVQFi.jpeg' }}
                    />

                    <Button
                        onPress={() => console.warn('我点了按钮')}
                        title="我是按钮"
                        accessibilityLabel="Learn more about this purple button"
                    />

                </ScrollView>
            </View>

        )
    }

}