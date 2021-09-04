import React, { useEffect, useState } from 'react'
import { FlatList, Text, View, StyleSheet } from 'react-native'
import BookDetails from './BookDetails';


export default () => {

    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])

    useEffect(
        () => {
            fetch('https://jsonplaceholder.typicode.com/photos')
                .then(response => response.json())
                .then(json => json.slice(0, 10))
                .then(json => setData(json))
                .catch(() => (alert('Erro in request')))
                .finally(() => setLoading(false))
        }, []
    )

    const myItems = ({ item }) => {
        return (
            <BookDetails
                id={`Book: ${item.id}`}
                title={item.title}
                url={item.url}
            />
        )
    }

    return (
        <View style={styles.container}>
            {
                loading ? false : (
                    <FlatList
                        data={data}
                        renderItem={myItems}
                        keyExtractor={item => item.id} />
                )
            }
        </ View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        //paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
        padding: 8,
    }
})