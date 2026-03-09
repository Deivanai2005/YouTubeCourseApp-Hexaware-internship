import React from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { courses } from "../data/courses";

export default function HomeScreen({ navigation }) {

return (

<View style={styles.container}>

<FlatList
data={courses}
keyExtractor={(item) => item.id}

renderItem={({ item }) => (

<TouchableOpacity
style={styles.card}
onPress={() => navigation.navigate("Course Player", { course: item })}
>

<Text style={styles.title}>{item.title}</Text>

</TouchableOpacity>

)}

/>

</View>

);

}

const styles = StyleSheet.create({

container: {
flex: 1,
padding: 20
},

card: {
padding: 20,
backgroundColor: "#eeeeee",
marginBottom: 12,
borderRadius: 10
},

title: {
fontSize: 18,
fontWeight: "bold"
}

});