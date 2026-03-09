import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

import PlaylistItem from "../components/PlaylistItem";

export default function CoursePlayerScreen({ route }) {

const { course } = route.params;

const [currentIndex, setCurrentIndex] = useState(0);

const videos = course.videos;

const nextVideo = () => {

if (currentIndex < videos.length - 1) {
setCurrentIndex(currentIndex + 1);
}

};

const progress = ((currentIndex + 1) / videos.length) * 100;

return (

<View style={styles.container}>

<YoutubePlayer
key={videos[currentIndex].id}   // IMPORTANT: forces reload
height={240}
play={true}
videoId={videos[currentIndex].id}

onChangeState={(state) => {
if (state === "ended") {
nextVideo();
}
}}
/>

<View style={styles.progressBar}>

<View
style={[styles.progressFill, { width: `${progress}%` }]}
/>

</View>

<Text style={styles.progressText}>
{Math.round(progress)}% Completed
</Text>

<Text style={styles.heading}>Playlist</Text>

<FlatList
data={videos}
keyExtractor={(item, index) => index.toString()}

renderItem={({ item, index }) => (

<PlaylistItem
video={item}
index={index}
currentIndex={currentIndex}
onPress={setCurrentIndex}
/>

)}

/>

</View>

);

}

const styles = StyleSheet.create({

container: {
flex: 1,
padding: 10
},

heading: {
fontSize: 20,
marginVertical: 10,
fontWeight: "bold"
},

progressBar: {
height: 10,
backgroundColor: "#ddd",
marginTop: 10
},

progressFill: {
height: 10,
backgroundColor: "green"
},

progressText: {
marginVertical: 6
}

});