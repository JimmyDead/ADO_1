import React, { useState } from 'react'
import { Text, View, StyleSheet, Pressable, Image } from 'react-native'
import ShowDetails from './ShowDetails'

export default ({ id, title, url }) => {
    const [modal, setModal] = useState(false)

    const updateModal = (value) => {
        setModal(value)
    }

    return (
        <View>
            <ShowDetails display={modal} toogleModal={updateModal} mensagem={title} />
            <Pressable onPress={() => updateModal(true)}>
                <Image style={styles.tinyLogo}
                    source={{
                        uri: url,
                    }} />
                <Text style={styles.paragraph}>{id}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    paragraph: {
        margin: 12,
        padding: 12,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: 'pink'
    },
    tinyLogo: {
        width: 50,
        height: 50,
        alignSelf: 'center'
    }
})