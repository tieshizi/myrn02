import React from 'react';
import { View, Text, TextInput, StyleSheet, Image, ActivityIndicator, ScrollView } from 'react-native';
import { Router, Stack, Scene } from 'react-native-router-flux'
import App from './App.js';
import MovieList from './components/movie/MovieList';
import MovieDetail from './components/movie/MovieDetail';


export default class Main extends React.Component {

    render() {
        return <Router>
            <Stack key='root'>
                <Scene key='app' component={App} title='App' hideNavBar={true} />
                <Scene key='movie' component={MovieList} title='电影列表' />
                <Scene key='moviedetail' component={MovieDetail} title='电影详情页面' />
            </Stack>
        </Router>
    }

}
