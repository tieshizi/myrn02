
# AppRegistry注册项目的时候第一个参数不要改，第二个参数是哪个文件为首页
# 在rn中只能使用js作后缀名，不能用jsx
 在rn中不能使用网页中的所有标签，rn 提供了view组件一系列基础标签，需要把这些标签从react-native中导入，所有文本必须使用Text组件进行包裹

#路由：react-native-router-flux
// Router相当于HashRouter   Stack是分组容器   Scene是具体的路由规则相当于Route
import { Router, Stack, Scene } from 'react-native-router-flux'
Actions.movie()
yarn add react-native-gesture-handler react-native-reanimated react-native-screens

#View不能直接设置点击事件 需要用TouchableHighlight
    <TouchableHighlight onPress={this._onPressButton}>
        <Image
        style={styles.button}
        source={require('./myButton.png')}
        />
    </TouchableHighlight>

#FlatList
<FlatList
    data={DATA}
    renderItem={renderItem}
    keyExtractor={item => item.id}
    extraData={selected}
/>





# 打包
keytool -genkey -v -keystore my-release-key01.keystore -alias my-key-alias01 -keyalg RSA -keysize 2048 -validity 10000


./gradlew assembleRelease