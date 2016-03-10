var React= require("react-native");
var {
	View,
	Text,
	StyleSheet,
	TextInput,
	TouchableHighlight,
	ActivityIndicatorIOS
} = React;
import api from '../Utils/api';
import Dashboard from './Dashboard';
var styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		padding: 30,
		marginTop: 65,
		flexDirection: 'column',
		justifyContent: 'center',
		backgroundColor: '#9AEF9A'
	},
	title: {
		marginBottom: 20,
		fontSize: 25,
		textAlign: 'center',
		color: '#fff'
	},
	searchInput: {
		height: 50,
		padding: 4,
		marginRight: 5,
		fontSize: 23,
		borderWidth: 1,
		borderColor: 'white',
		borderRadius: 8,
		color: 'white'
	},
	buttonText: {
		fontSize: 18,
		color: '#111',
		alignSelf: 'center'
	},
	button: {
		height: 45,
		flexDirection: 'row',
		backgroundColor: 'white',
		borderWidth: 1,
		borderRadius: 8,
		marginBottom: 10,
		marginTop: 10,
		alignSelf: 'stretch',
		justifyContent: 'center'
	}
});

class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			isLoading: false,
			error: false
		}
	}
	handleChange(e) {
		this.setState({
			username: e.nativeEvent.text
		});
	}
	handleSubmit() {
		if(!this.state.username) {
			alert("Please Enter username");
			return;
		}
		this.setState({
			isLoading: true,
			error: false
		});
		api.getBio(this.state.username).then((res) => {
				if(res.message === 'Not Found') {
					this.setState({
						error: "User Not Found",
						isLoading: false
					});
				} else {
					this.props.navigator.push({
						title: res.name || "Select an option",
						component: Dashboard,
						passProps: {userInfo: res}
					});
					this.setState({
						isLoading: false,
						error: false,
						username: ''
					});
				}
			});
		//alert("Submitted "+this.state.username);
	}
	render() {
		var showErr = (
			this.state.error ? <Text>{this.state.error}</Text> : <View></View>
		);
		return (
				<View style={styles.mainContainer}>
					<Text style={styles.title}>Search for a Github user</Text>
					<TextInput style={styles.searchInput}
						value = {this.state.username}
						onChange = {this.handleChange.bind(this)} autoFocus = {true}/>
					<TouchableHighlight
						style = {styles.button}
						onPress={this.handleSubmit.bind(this)} underlayColor="#BCBCFF">
						<Text style = {styles.buttonText}>Search</Text>
					</TouchableHighlight>
					<ActivityIndicatorIOS
						animating={this.state.isLoading}
						color= '#111'
						size="large"></ActivityIndicatorIOS>
					{showErr}
				</View>
			)
	}
}

module.exports = Main