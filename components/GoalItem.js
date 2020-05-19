import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const GoalItem = (props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={props.onDelete.bind(this, props.id)}
    >
      <View style={styles.goalContainer}>
        <Text color={"purple"}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  goalContainer: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "purple",
    borderColor: "black",
    borderWidth: 1,
    alignItems: "center",
  },
});
export default GoalItem;
