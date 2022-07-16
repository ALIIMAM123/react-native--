import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const FlatListDemo = () => {
	const names = [
		{ index: "1", name: "Ali" },
		{ index: "2", name: "Jitendre" },
		{ index: "3", name: "Dipesh" },
		{ index: "4", name: "Suresh" },
		{ index: "5", name: "Rahul" },
		{ index: "6", name: "Amarandra" },
		{ index: "6", name: "Bhupesh" },
		{ index: "7", name: "Sumit" },
	];

	return (
		<FlatList
			style={styles.listStyle}
			keyExtractor={(key) => {
				return key.index;
			}}
			// horizontal
			showsHorizontalScrollIndicator={false}
			// numColumns={2}
			// inverted
			data={names}
			renderItem={(element) => {
				console.log(element.item.name);
				return <Text style={styles.textStyle}>{element.item.name}</Text>;
			}}
		/>
	);
};

const styles = StyleSheet.create({
	listStyle: {
		backgroundColor: "rgba(61, 65, 251, 0.54)",
		// height: "100vh",
		textAlign: "center",
		padding: 10,
		margin: 20,
	},
	textStyle: {
		fontSize: 30,
		color: "rgba(6, 9, 220, 0.54)",
		backgroundColor: "rgba(237, 237, 243, 0.54)",
		padding: 10,
		margin: 20,
		fontFamily: "roboto",
		textAlign: "center",
		fontWeight: "500",
	},
});

export default FlatListDemo;
