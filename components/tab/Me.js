
import React from 'react';
import { View, Text, Button, Image, ScrollView, StyleSheet } from 'react-native'
import ImagePicker from 'react-native-image-picker'
var photoOptions = { //配置地步弹出框
    //底部弹出框选项
    title: '请选择',
    cancelButtonTitle: '取消',
    takePhotoButtonTitle: '拍照',
    chooseFromLibraryButtonTitle: '选择相册',
    quality: 0.75,
    allowsEditing: true,
    noData: false,
    storageOptions: {
        skipBackup: true,
        path: 'images'
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});

export default class Me extends React.Component {
    // 第2步：初始化头像
    constructor(props) {
        super(props);
        this.state = {
            imgURL: 'https://himg.bdimg.com/sys/portraitn/item/1d2eccfacaa8d7d3d6aeb8e84168'
        }
    }






    // 第4步：具体拍照事件函数
    cameraAction = () => {
        ImagePicker.showImagePicker(photoOptions, (response) => {
            console.log('response' + response);
            if (response.didCancel) {
                return
            }
            this.setState({
                imgURL: response.uri
            });
        })
    }

    render() {
        return (
            <>
                <ScrollView
                    style={styles.container}>
                    <View>
                        <Text>个人</Text>

                        {/* // 第3步：设置拍照头像事件 */}
                        <Image source={{ uri: this.state.imgURL }} style={{ width: 200, height: 200 }}></Image>
                        <Button title="拍照" onPress={this.cameraAction}></Button>

                    </View>
                </ScrollView>
            </>
        )
    }
}



