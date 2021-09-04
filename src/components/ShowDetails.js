import React from 'react'
import { Text, View, StyleSheet, Modal, Pressable } from 'react-native'


export default ({ display, toogleModal, mensagem }) => (
    <Modal
        animationType="slide"
        transparent={true}
        visible={display}>

        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <Pressable onPress={() => toogleModal(false)}>
                    <Text>{mensagem}</Text>
                </Pressable>
            </View>
        </View>
    </Modal>
)

const styles = StyleSheet.create({
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})