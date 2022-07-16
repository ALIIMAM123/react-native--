import React from "react";
import { View, Text, StyleSheet } from "react-native";

const FirstChallenge = () => {
	const yourName = "Md Ali imam";
	return (
		<View>
			<Text style={styles.textStyleOne}>hello world</Text>
			<Text style={styles.textStyleTwo}> i started learning React native</Text>
			<Text style={styles.textStyleThree}>{yourName}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	textStyleOne: {
		fontSize: 40,
		color: "red",
		fontWeight: "bold",
	},
	textStyleTwo: {
		fontSize: 30,
		color: "blue",
		fontWeight: 600,
	},
	textStyleThree: {
		fontSize: 20,
		color: "green",
		fontWeight: "500",
	},
});

export default FirstChallenge;
