import React from 'react-native';
import Profile from './Profile';
import Separator from './Helpers/Separator';
//var addons = require('react-addons-create-fragment');
var {
	Text,
	View,
	StyleSheet,
	Image,
	TouchableHighlight
} = React,
styles = StyleSheet.create({
	container: {
		marginTop: 65,
		flex: 1
	},
	image: {
		height: 360
	},
	buttonText: {
		fontSize: 24,
		color: 'white',
		alignSelf: 'center'
	}
});
class Dashboard extends React.Component {
	makeBackground(btn) {
		var style = {
			flexDirection: 'row',
			alignSelf: 'stretch',
			justifyContent: 'center',
			flex: 1
		};
		if (btn === 0) {
			style.backgroundColor = '#48BBEC';
		} else if (btn === 1) {
			style.backgroundColor = '#E77AAE';
		} else {
			style.backgroundColor = '#758BF4';
		}
		return style
	}
	goToProfile() {
		var props = this.props;
		this.props.navigator.push({
						title: "Display Profile",
						component: Profile,
						passProps: {userInfo: props.userInfo}
					});
	}
	goToRepos() {
		alert("Display Repos");
	}
	goToNotes() {
		alert("Display Notes");
	}
	render() {
		//let imgSrc = this.props.userInfo['avatar_url'];
		return (
			<View style = {styles.container}>
				<Image source={{uri: this.props.userInfo['avatar_url']}} style = {styles.image} />
				<TouchableHighlight style = {this.makeBackground(0)}
					onPress={this.goToProfile.bind(this)}
						underlayColor = '#88D4F5'>
				<Text style = {styles.buttonText}>View Profile</Text>
				</TouchableHighlight>
				<TouchableHighlight style = {this.makeBackground(1)}
					onPress={this.goToRepos.bind(this)}
						underlayColor = '#88D4F5'>
				<Text style = {styles.buttonText}>View Repositories</Text>
				</TouchableHighlight>
				<TouchableHighlight style = {this.makeBackground(2)}
					onPress={this.goToNotes.bind(this)}
						underlayColor = '#88D4F5'>
				<Text style = {styles.buttonText}>View Notes</Text>
				</TouchableHighlight>
			</View>
		)
	}
}

export default Dashboard;


//<Text>{this.props.userInfo}</Text>    