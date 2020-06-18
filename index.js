/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

// AppRegistry注册项目的时候第一个参数不要改，第二个参数是哪个文件为首页
AppRegistry.registerComponent(appName, () => App);
