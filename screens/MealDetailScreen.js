import React, { useLayoutEffect } from "react";
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import IconButton from "../components/IconButton";
import List from "../components/MealDetail/List";
import Subtitle from "../components/MealDetail/Subtitle";
import MealDetails from "../components/MealDetails";
import { MEALS } from "../data/dummy-data";

function MealDetailScreen({ route, navigation }) {
  const mealId = route.params.mealId;
  const meal = MEALS.find((meal) => meal.id === mealId);
  //   function headerButtonPressHandler() {
  //     console.log("pressed");
  //   }
  //   useLayoutEffect(() => {
  //     navigation.setOptions({
  //       headerRight: () => {
  //         return (
  //           <IconButton
  //             icon="star"
  //             color="white"
  //             onPress={headerButtonPressHandler}
  //           />
  //         );
  //       },
  //     });
  //   }, [navigation, headerButtonPressHandler]);
  return (
    <ScrollView style={{ marginBottom: 15 }}>
      <Image style={styles.image} source={{ uri: meal.imageUrl }} />
      <Text style={styles.title}>{meal.title}</Text>
      <MealDetails
        complexity={meal.complexity}
        affordability={meal.affordability}
        duration={meal.duration}
        textStyle={styles.detailText}
      />
      <Subtitle>Ingredients</Subtitle>
      <List data={meal.ingredients} />
      <Subtitle>Steps</Subtitle>
      <List data={meal.steps} />
    </ScrollView>
  );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
});
