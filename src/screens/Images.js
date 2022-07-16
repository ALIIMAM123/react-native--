import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

const ImagesFile = () => {
	return (
		<View style={styles.listStyle}>
			<Text style={styles.textStyle}>Image Screen</Text>
			<Image
				style={styles.imageStyle}
				source={require("../../assets/test-1.jpeg")}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	listStyle: {
		height: 800,
		backgroundColor: "grey",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	textStyle: {
		fontSize: 40,
		fontFamily: "roboto",
		fontWeight: "bold",
		marginBottom: 20,
		color: "white",
	},
	imageStyle: {
		width: 300,
		height: 300,
		borderRadius: 10,
	},
});

export default ImagesFile;
