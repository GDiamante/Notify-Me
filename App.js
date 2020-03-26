import React from 'react';
import {
	StyleSheet,
	View,
	Text,
	TextInput,
	Button
} from 'react-native';

import PushNotification from "@react-native-community/push-notification-ios";

// Custom components
import PushController from './components/PushController';
import TimeButton from './components/TimeButton';

export default class App extends React.Component {

	// Sends notification if text is present
	sendNotification() {
		if (this.notificationText !== '') {
			PushNotification.presentLocalNotification({
				alertTitle: 'Notify Me!',
				alertBody: this.notificationText,
			})
			this.textInput.clear();
		} else {
			alert('No Text!');
		}
	}

	render() {
		this.notificationText = '';
		this.textInput = '';

		return (
			<>
				<View style={styles.mainView}>
					<View style={styles.header}>
						<Text style={styles.title}>Notify Me!</Text>
					</View>
					<View style={styles.body}>

						<TextInput style={styles.input} 
							onChangeText={(text) => this.notificationText = text} 
							multiline
							ref={input => this.textInput = input}
							/>

						<Button title='Notify'
							color='blue' 
							onPress={() => this.sendNotification()}
							/>

						<TimeButton />
						<PushController />
					</View>
				</View>
			</>
		);
	}
};

const styles = StyleSheet.create({
	mainView: {
		flex: 1, 
		flexDirection: 'column',
		justifyContent: 'center'
	},
	header: {
		flex: 1,
		justifyContent: 'flex-end',
		height: 100
	},
	title: {
		fontSize: 44,
		fontWeight: '500',
		textAlign: 'center'
	},
	body: {
		backgroundColor: 'white',
		marginTop: 50,
		marginBottom: 50,
		flex: 4
	},
	input: {
		alignSelf: 'center',
		height: 150,
		width: 350,
		borderColor: 'gray',
		borderWidth: 2
	}
});
