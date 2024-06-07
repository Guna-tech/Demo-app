/** @format */

import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { Checkbox, IconButton, MD3Colors } from 'react-native-paper';

const CHECKED = 'checked';
const UNCHECKED = 'unchecked'

const FlatListItem = ({ todo, deleteTodo, index }) => {
	return (
		<View style={styles.item}>
			<Checkbox
				status={todo.completed ? CHECKED : UNCHECKED}
				onPress={() => {
					todo.completed = !todo.completed;
					alert(JSON.stringify(todo));
				}}
			/>
			<Text style={styles.title}>{todo.title}</Text>
			<IconButton
                style={styles.deleteButton}
				icon="delete"
				iconColor={MD3Colors.error50}
				size={20}
				onPress={() => deleteTodo(index)}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	item: {
		padding: 10,
		marginVertical: 8,
		marginHorizontal: 5,
		borderWidth: 1,
		borderColor: 'grey',
		borderRadius: 10,
		flexDirection: 'row',
		alignItems: 'center',
        flex: 1,
        justifyContent: 'space-between'
	},
	title: {
		fontSize: 32,
        width: '80%'
	}
});

export default FlatListItem;
