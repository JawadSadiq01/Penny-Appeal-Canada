import { Card, Text } from "react-native-paper";
import { View, StyleSheet, Image, FlatList } from "react-native";
import { CALCULATIONS_DATA } from "../Constants";

const Calculators = () => {

  return (
    <View style={styles.calculatorContainer}>
      <Text variant="titleLarge" style={styles.heading}>
        Calculators
      </Text>
      <View style={styles.cardsContainer}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={CALCULATIONS_DATA}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => {
            return <Card style={styles.calculatorCard}>
              <Card.Content style={styles.center}>
                <Image style={styles.cardImage} resizeMode="cover" source={item.image} />
                <Text variant="bodyLarge" style={styles.text}>{item.text}</Text>
              </Card.Content>
            </Card>
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  calculatorContainer: {
    flex: 3,
    paddingHorizontal: 20,
  },
  heading: {
    fontFamily: "NunitoSans_700Bold",
    color: "black"
  },
  calculatorCard: {
    marginRight: 15,
    marginVertical: 10,
    paddingHorizontal: 10
  },
  text: {
    fontFamily: "NunitoSans_600SemiBold"
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  cardsContainer: {
    flexDirection: "row",
  },
  cardImage: {
    width: 50,
    height: 50
  }
});

export default Calculators;
