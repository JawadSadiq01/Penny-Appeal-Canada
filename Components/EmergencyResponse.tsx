import { Card, Text } from "react-native-paper";
import { View, StyleSheet, ScrollView, Image, FlatList } from "react-native";
import { EMERGENCY_DATA } from "../Constants";
import SingleCard from "./SingleCard";

const EmergencyResponse = () => {

  return (
    <View style={styles.EmergencyContainer}>
      <Text
        variant="titleLarge"
        style={styles.heading}
      >
        Emergency Response
      </Text>
      <View>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={[styles.scrollContainer]}
          horizontal
        >
          {EMERGENCY_DATA.map(({ key, image, text, description }) => {
            return (
              <SingleCard
                key={key}
                image={image}
                title={text}
                description={description}
                showDescription={true}
                width="30%"
              />
            );
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
    fontFamily: "NunitoSans_700Bold",
    color: "black",
    marginBottom: 20,
  },
  scrollContainer: {
    paddingBottom: 15,
    paddingRight: 250
  }
});

export default EmergencyResponse;
