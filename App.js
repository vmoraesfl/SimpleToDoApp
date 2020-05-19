import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = (goalTitle) => {
    // console.log(enteredGoal);  // for debug
    //setCourseGoals([...courseGoals, enteredGoal]); //outra sintaxe
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle },
    ]);
    setIsAddMode(false);
  };

  const removeGoalHandler = (goalId) => {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  };

  const cancelHandler = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <Button
          color="orange"
          title="Add New Goal"
          onPress={() => setIsAddMode(true)}
        />
        <GoalInput
          visible={isAddMode}
          onAddGoal={addGoalHandler}
          onCancel={cancelHandler}
        />
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => (
            <GoalItem
              id={itemData.item.id}
              onDelete={removeGoalHandler}
              title={itemData.item.value}
            />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "purple",
  },
  container: {
    //flex: 1,
    backgroundColor: "#b1df",
    //alignItems: "center",
    //justifyContent: "center",
    padding: 50,
  },
});
