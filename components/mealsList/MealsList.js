import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import MealItem from "./MealItem";
function MealsList({ items }) {
  const navigation = useNavigation();
  function renderMealItem(itemData) {
    function onPressHandler(id) {
      navigation.navigate("MealDetail", {
        mealId: id,
      });
    }
    return (
      <MealItem
        title={itemData.item.title}
        imageURL={itemData.item.imageUrl}
        complexity={itemData.item.complexity}
        duration={itemData.item.duration}
        affordability={itemData.item.affordability}
        onPress={() => onPressHandler(itemData.item.id)}
      />
    );
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => renderMealItem(itemData)}
      />
    </View>
  );
}

export default MealsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
