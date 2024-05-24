import { Card, Text } from "react-native-paper";
import { View, StyleSheet, ScrollView } from "react-native";
import { EVENTS_DATA } from "../Constants";
import SingleCard from "./SingleCard";

const Events = () => {
  return (
    <View style={styles.EmergencyContainer}>
      <Text variant="titleLarge" style={styles.heading}>
        Events
      </Text>
      <View>
        <ScrollView contentContainerStyle={styles.scrollContainer} horizontal showsHorizontalScrollIndicator={false}>
          {EVENTS_DATA.map(({ image, text }) => {
            return <SingleCard image={image} title={text} description={""} showDescription={false} width="13%" />
          })}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  EmergencyContainer: {
    flex: 3.5,
    paddingHorizontal: 20,
    paddingTop: 15,
  },
  heading: {
    color: "black",
    fontFamily: "NunitoSans_700Bold",
    marginBottom: 20
  },
  scrollContainer: {
    paddingBottom: 15
  }
});

export default Events;
