// import libraries to create components

import React from "react";
import { Text, StyleSheet, View } from "react-native";
// import CustomComponent from "./src/screens/CustomComponent";
import FirstChallenge from "./src/screens/firstChallenge";

// create a component that return some jsx / simple function

const App = () => {
	const myName = "ali";
	const myElement = <Text>Hello world please subscribe</Text>;
	// const getFullName = (firstName, secondName, thirdName) => {
	// 	return `My Name is  ${firstName} ${secondName} ${thirdName}`;
	// };

	return (
		<View>
			<FirstChallenge />
		</View>
	);
};
// create a StyleSheet to style the component
// const styles = StyleSheet.create({
// 	textStyle: {
// 		color: "red",
// 		marginTop: 40,
// 	},
// });

// export the file , so that we can use it elsewhere in our app
export default App;
