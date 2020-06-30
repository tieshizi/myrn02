import React from 'react';
import { View, Text, TouchableHighlight, StyleSheet, FlatList, Image, ActivityIndicator, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux'

export default class Main extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            MovieList: [],
            pageSize: 10,
            pageNum: 0,
            totalPage: 0,
            loading: true,
            end: false
        }
    }

    componentDidMount() {
        this.getMovieData()
    }

    getMovieData = () => {
        // alert(this.state.pageNum)
        // const start = (this.state.pageNum - 1) * this.state.pageSize
        //  totalPage: Math.ceil(data.total / this.state.pageSize) 
        const { pageNum } = this.state

        fetch(`http://api.douban.com/v2/movie/in_theaters?apikey=0df993c66c0c636e29ecbb5344252a4a&start=0&count=6`)
            .then(response => response.json())
            .then(data => {
                data.subjects.map(item => {
                    item.title = `第${pageNum + 1}页${item.title}`
                })
                this.setState({ MovieList: this.state.MovieList.concat(data.subjects), loading: false })
            })
    }

    getFlatListItem = (item) => {
        return <TouchableHighlight underlayColor='white' onPress={() => Actions.moviedetail({ id: item.item.id })}>

            <View style={{ flexDirection: 'row', borderColor: '#ccc', borderWidth: 1, padding: 10 }}>
                <Image style={{
                    resizeMode: "cover",
                    height: 150,
                    width: 150,
                    marginRight: 20
                }} source={{ uri: item.item.images.small }}></Image>
                <View style={{ justifyContent: 'space-around', breakWord: 'wrap', width: '80%' }}>
                    <Text >名字：{item.item.title}</Text>
                    <Text >时间：{item.item.mainland_pubdate}</Text>
                    <Text >描述：{item.item.original_title}</Text>
                </View></View>
        </TouchableHighlight>
    }

    getNextContent = () => {
        if (this.state.pageNum + 1 > 4) {
            this.setState({ end: true })
            return
        }
        this.setState({
            pageNum: this.state.pageNum + 1
        }, () => {
            this.getMovieData()
        })
    }

    renderFooter = () => {
        return <View style={{ alignItems: 'center', height: 100 }}>
            {this.state.end ? <Text>没有更多数据了。。。</Text> : <Text>数据加载中。。。</Text>}
        </View>
    }

    render() {
        const { loading, MovieList } = this.state
        if (loading) {
            return <ActivityIndicator />
        }
        return <View
            style={{ width: '100%', alignItems: 'center' }}>
            <FlatList
                data={MovieList}
                renderItem={item => this.getFlatListItem(item)}
                keyExtractor={item => item.id + Math.random()}
                onEndReachedThreshold={0.1}
                onEndReached={this.getNextContent}
                ListFooterComponent={this.renderFooter}
            />
        </View>
    }

}
