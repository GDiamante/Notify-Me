	import React from 'react';
	import { Button } from 'react-native'
	import moment from 'moment'

	export default class TimeButton extends React.Component {

	getCurrentDate() {
		return (moment().calendar());
	}

	processNotification() {
		alert(this.getCurrentDate());
	}

	render() {
		return (
			<Button title='Get Current Time!'
				onPress={() => {this.processNotification()}}
				color='red' />
		)
	}
}
