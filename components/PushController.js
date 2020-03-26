import React from 'react'
import PushNotification from "@react-native-community/push-notification-ios";

export default class PushController extends React.Component {
    componentDidMount() {
        PushNotification.requestPermissions();
    }
    render() {
        return null;
    }
}