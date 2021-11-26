
import React from "react";
import { Text, TouchableHighlight, View, StyleSheet } from "react-native"
const Goal = props => {

    return <TouchableHighlight
        onPress={() => console.log(props)}

    >
        <View style={styles.text}>
            <Text>{props.title}</Text>
        </View>
    </TouchableHighlight>
}
const styles = StyleSheet.create({
    text: {
        backgroundColor: "#ddd",
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
    },
});

export default Goal;