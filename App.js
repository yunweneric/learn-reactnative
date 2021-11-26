import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  TextInput,
  Image,
  Button,
  Platform,
  SafeAreaView,
  TouchableHighlight,
  StyleSheet,
  Text,
  View,
  FlatList,
} from "react-native";
import Goal from "./app/components/goalItem";
import GoalInput from "./app/components/goalInput";

export default function App() {

  const [allGoals, setAllGoals] = useState([]);


  const addGoalhandler = (enteredGoal) => {
    setAllGoals((currentGoal) => [...currentGoal, { id: Math.random().toString(), value: enteredGoal }]);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ marginHorizontal: 30, marginTop: 50 }}>
        <GoalInput onAddGoal={addGoalhandler} />

        <FlatList

          data={allGoals}
          keyExtractor={(item) => item.id}
          renderItem={itemData =>
            <Goal title={itemData.item.value} />}

        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },


  separator: {},
});
