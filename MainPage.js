import React, { Component } from 'react';
import { Card, Button, Image, StyleSheet, Text, View } from 'react-native';

//type Props = {}
class MainPage extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<View style={homeStyle.container}>
				<Card style={homeStyle.mainCard}>
					<Image
						style={homeStyle.logo}
						source={require('E:/Mehrin_Projects/BarCodeScannerApp/Images/scanner.png')}
					/>
				</Card>
				<Card style={homeStyle.appNameCard}>
					<Text>Barcode Scanner</Text>
				</Card>
				<Button style={homeStyle.button}>Get Started-></Button>
			</View>
		);
	}
}
export default MainPage;
const homeStyle = StyleSheet.create({
	mainCard: {
		flex: 1,
		backgroundColor: '#009933',
		justifyContent: 'center',
		alignItems: 'center',
	},
	container: {
		backgroundColor: '#f2f2f2',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	appNameCard: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#264d73',
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	logo: {
		width: 100,
		height: 100,
		borderRadius: 40,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
	button: {
		backgroundColor: '#841584',
		fontWeight: 'bold',
	},
});
