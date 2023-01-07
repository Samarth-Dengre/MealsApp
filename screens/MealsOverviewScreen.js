import React, { useLayoutEffect } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import MealItem from "../components/MealItem";
import { CATEGORIES, MEALS } from "../data/dummy-data";

function MealsOverviewScreen({ route, navigation }) {
  const id = route.params.categoryId;
  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(id) >= 0;
  });
  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === id
    ).title;
    navigation.setOptions({ title: categoryTitle });
  }, [id, navigation]);

  function onPressHandler(id) {
    navigation.navigate("MealDetail", {
      mealId: id,
    });
  }

  function renderMealItem(itemData) {
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
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => renderMealItem(itemData)}
      />
    </View>
  );
}

export default MealsOverviewScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
