import React, { useLayoutEffect } from "react";
import MealsList from "../components/mealsList/MealsList";
import { CATEGORIES, MEALS } from "../data/dummy-data";
MealsList;
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

  return <MealsList items={displayedMeals}/>;
}

export default MealsOverviewScreen;
