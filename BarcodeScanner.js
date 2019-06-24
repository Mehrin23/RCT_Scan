import React, { Component } from 'react';
import { Text, View, StyleSheet, Alert, TouchableOpacity, Image } from 'react-native';
import Camera from 'react-native-camera';
/*
Dependency File link....RCT Camera Package!!
https://github.com/diegocouto/react-native-camera-rct.git

*/
class BarcodeScanner extends Component {
	constructor(props) {
		super(props);
		this.handleTourch = this.handleTourch.bind(this);
		this.state = {
			torchOn: false, //to handle flasher for dark areas..only when click happens state changes to true and flash appears
		};
	}

	//torch option handling
	handleTourch(value) {
		if (value === true) {
			this.setState({ torchOn: false });
		} else {
			this.setState({ torchOn: true });
		}
	}

	//when camera reads some bar code a pop up shown
	onBarCodeRead = e => {
		Alert.alert('Barcode value read is :' + e.data, '\n Barcode type is :' + e.type);
	};

	//this method shows a camera view to user that is used to scan code
	render() {
		return (
			<View style={styles.container}>
				<Camera
					style={styles.preview}
					torchMode={this.state.torchOn ? Camera.constants.TorchMode.on : Camera.constants.TorchMode.off}
					onBarCodeRead={this.onBarCodeRead}
					ref={cam => (this.camera = cam)}
					aspect={Camera.constants.Aspect.fill}
				>
					<Text
						style={{
							backgroundColor: 'white',
						}}
					>
						BARCODE SCANNER
					</Text>
				</Camera>
				<View style={styles.bottomOverlay}>
					<TouchableOpacity onPress={() => this.handleTourch(this.state.torchOn)}>
						<Image
							style={styles.cameraIcon}
							source={
								this.state.torchOn === true
									? require('E:/Mehrin_Projects/BarCodeScannerApp/Images/flash_on.png')
									: require('E:/Mehrin_Projects/BarCodeScannerApp/Images/flash_off.png')
							}
						/>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}
export default BarcodeScanner;
const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
	},
	preview: {
		flex: 1,
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	cameraIcon: {
		margin: 5,
		height: 40,
		width: 40,
	},
	bottomOverlay: {
		position: 'absolute',
		width: '100%',
		flex: 20,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
});
