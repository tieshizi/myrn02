import React from 'react';
import { View, Text, Image, ActivityIndicator, ScrollView } from 'react-native';

export default class MovieDetail extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [],
            loading: true,
        }
    }

    componentWillMount() {
        fetch(`https://api.douban.com/v2/movie/subject/${this.props.id}?apikey=0df993c66c0c636e29ecbb5344252a4a`)
            .then(response => response.json())
            .then(data => {
                this.setState({ data, loading: false })
            })
    }


    render() {
        const { loading, data } = this.state
        if (loading) {
            return <ActivityIndicator />
        }
        return <ScrollView>
            <View style={{ width: '100%', alignItems: 'center' }}>
                <Image style={{
                    resizeMode: "cover",
                    width: 300,
                    height: 300,
                }} source={{ uri: data.images.large }}></Image>
                <View style={{ justifyContent: 'space-around', alignItems: 'center', breakWord: 'wrap', width: '80%' }}>
                    <Text >名字：{data.title}</Text>
                    <Text >上映时间：{data.pubdate}</Text>
                    <Text >电影描述：{data.summary}</Text>
                </View>
            </View>
        </ScrollView >
    }

}
