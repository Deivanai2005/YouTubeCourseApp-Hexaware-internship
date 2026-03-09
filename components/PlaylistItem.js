import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function PlaylistItem({
video,
index,
currentIndex,
onPress
}) {

return (

<TouchableOpacity
style={[
styles.container,
currentIndex === index && styles.activeVideo
]}

onPress={() => onPress(index)}
>

<Text style={styles.title}>
{video.title}
</Text>

</TouchableOpacity>

);

}

const styles = StyleSheet.create({

container: {
padding: 12,
borderBottomWidth: 1,
borderColor: "#ddd"
},

title: {
fontSize: 15
},

activeVideo: {
backgroundColor: "#e6f2ff"
}

});