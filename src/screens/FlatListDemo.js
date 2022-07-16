import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const FlatListDemo = () => {
	const names = [
		{
			name: "Ali",
		},
		{
			name: "jitendre",
		},
		{
			name: "dipesh",
		},
		{
			name: "suresh",
		},
	];

	return (
		<FlatList
			data={names}
			renderItem={(element) => {
				console.log(element.item.name);
				return <Text style={styles.textStyle}>{element.item.name}</Text>;
			}}
		/>
	);
};

const styles = StyleSheet.create({
	textStyle: {
		fontSize: 30,
		color: "red",
	},
});

export default FlatListDemo;
