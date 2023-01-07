import { FlatList, View } from "react-native";
import CategoryGridTitle from "../components/CategoryGridTitle";
import { CATEGORIES } from "../data/dummy-data";

function CategoriesScreen({ navigation }) {
  function renderCategoryItem(itemData) {
    const pressHandler = () => {
      navigation.navigate("MealsOverview", {
        categoryId: itemData.item.id,
      });
    };
    return (
      <CategoryGridTitle
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }

  return (
    <View>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => renderCategoryItem(itemData)}
        numColumns={2}
      />
    </View>
  );
}

export default CategoriesScreen;
