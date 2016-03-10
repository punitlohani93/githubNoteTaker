import React from 'react-native';

var {View, StyleSheet} = React,
	styles = StyleSheet.create({
		separator: {
			height: 1,
			backgroundColor: '#E4E4E4',
			flex: 1,
			marginLeft: 15
		}
	});

const Separator = ()=> <View style = {styles.separator} />;

module.exports = Separator;