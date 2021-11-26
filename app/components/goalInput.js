import React, { useState } from "react";
import { View, TextInput, Text, Button, StyleSheet } from "react-native";
const GoalInput = props => {
    const getGoalhandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };
    const [enteredGoal, setEnteredGoal] = useState("");


    return <View
        style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 10,
            alignItems: "center",
        }}
    >
        <TextInput
            placeholder={"Enter your goal"}
            style={styles.textInput}
            onChangeText={getGoalhandler}
            value={enteredGoal}
        />
        <View style={{ borderRadius: 50 }}>
            <Button title="Input goal" onPress={() => props.onAddGoal()} />
        </View>
    </View>
}
const styles = StyleSheet.create({
    textInput: {
        borderColor: "grey",
        borderWidth: 1,
        borderRadius: 5,
        width: 200,
        paddingHorizontal: 10,
    },
})

export default GoalInput;