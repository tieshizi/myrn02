
import React from 'react';
import { View, Text, TextInput, StyleSheet, Image, ActivityIndicator, ScrollView } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Home from './components/tab/Home.js'
import Search from './components/tab/Search.js'
import Car from './components/tab/Car.js'
import Me from './components/tab/Me.js'
import { Grid, Icon, Button } from '@ant-design/react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'home'
    }
  }

  render() {

    return (

      <View style={styles.container}>

        {/* <Button type="primary">primary</Button> */}

        <TabNavigator >
          <TabNavigator.Item
            selected={this.state.selectedTab === 'home'}
            title="首页"
            renderIcon={() => <Icon name="home" size="md" />}
            renderSelectedIcon={() => <Icon name="home" size="md" color="#0079ff" />}
            onPress={() => this.setState({ selectedTab: 'home' })}>
            <Home></Home>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'search'}
            title="搜索"
            renderIcon={() => <Icon name="search" size="md" />}
            renderSelectedIcon={() => <Icon name="search" size="md" color="#0079ff" />}
            onPress={() => this.setState({ selectedTab: 'search' })}>
            <Search></Search>
          </TabNavigator.Item>

          <TabNavigator.Item
            selected={this.state.selectedTab === 'car'}
            title="购物车"
            renderIcon={() => <Icon name="shopping-cart" size="md" />}
            renderSelectedIcon={() => <Icon name="shopping-cart" size="md" color="#0079ff" />}
            badgeText={2}
            onPress={() => this.setState({ selectedTab: 'car' })}>
            <Car />
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'me'}
            title="Me"
            renderIcon={() => <Icon name="user" size="md" />}
            renderSelectedIcon={() => <Icon name="user" size="md" color="#0079ff" />}
            onPress={() => this.setState({ selectedTab: 'me' })}>
            <Me />
          </TabNavigator.Item>
        </TabNavigator>
      </View >
    )
  }

}
