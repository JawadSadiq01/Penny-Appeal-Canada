import { Card, Text } from "react-native-paper";
import { View, StyleSheet, ScrollView } from "react-native";
import { CAUSES_DATA } from "../Constants";
import SingleCard from "./SingleCard";


const FeaturedCourses = () => {

  return (
    <View style={styles.EmergencyContainer}>
      <Text variant="titleLarge" style={styles.heading}>
        Featured Causes
      </Text>
      <View>
        <ScrollView contentContainerStyle={styles.scrollContainer} showsHorizontalScrollIndicator={false} horizontal>
          {CAUSES_DATA.map(({ key, image, text }) => {
            return (
              <SingleCard key={key} image={image} title={text} description={""} showDescription={false} width="12%" />
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
    color: "black",
    fontFamily: "NunitoSans_700Bold",
    marginBottom: 20
  },
  scrollContainer: {
    paddingBottom: 15,
  }
});

export default FeaturedCourses;
