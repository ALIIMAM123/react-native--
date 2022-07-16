import { View, Text, StyleSheet, Button, Alert } from "react-native";
import React from "react";

const OurButton = () => {
	return (
		<View>
			<Text style={styles.textStyle}>Button</Text>
			<Button
				// disabled
				style={styles.myBtn}
				title="Click Here"
				onPress={() => {
					// console.log("Subscribe the channel");
					Alert.alert("Simple Button pressed");
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	textStyle: {
		marginVertical: 200,
		textAlign: "center",
		fontSize: 20,
	},
	myBtn: {
		padding: 25,
		margin: 20,
		backgroundColor: "red",
	},
});

export default OurButton;
