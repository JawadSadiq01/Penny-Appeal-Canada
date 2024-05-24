import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { ORANGE_COLOR } from "../Constants";
import { AntDesign } from '@expo/vector-icons';


const Home = () => {
    return (
        <View style={styles.homeContainer}>
            <View style={styles.home}>
                <View style={styles.cornerBall}>
                    <Text style={styles.ballText}>penny</Text>
                    <Text style={[styles.ballText, styles.appeal]}>appeal</Text>
                </View>
            </View>
            <View style={styles.searchBarContainer}>
                <Text style={[styles.searchText]}><Text style={styles.innerText}>Salam,</Text> Ahmed</Text>
                <TouchableOpacity>
                    <AntDesign name="search1" size={35} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    home: {
        flex: 3,
    },
    cornerBall: {
        width: 200,
        aspectRatio: 1,
        backgroundColor: 'white',
        borderRadius: 100,
        transform: [{ translateX: -40 }, { translateY: -40 }],
        position: "relative"
    },
    ballText: {
        fontSize: 30,
        position: "absolute",
        right: 50,
        bottom: 80,
        color: ORANGE_COLOR,
        fontFamily: 'NunitoSans_300Light'
    },
    homeContainer: {
        flexDirection: "row"
    },
    searchBarContainer: {
        width: "60%",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        gap: 20,
    },
    searchText: {
        fontSize: 20,
        color: "white",
        fontFamily: "NunitoSans_400Regular"
    },
    innerText: {
        fontWeight: "bold",
        fontFamily: "NunitoSans_700Bold"
    },
    appeal: {
        bottom: 40, right: 40, fontWeight: "bold", fontFamily: 'NunitoSans_700Bold'
    }
})

export default Home