/** @format */

import { View, TextInput, StyleSheet } from 'react-native';
import React from 'react';
import { useController } from 'react-hook-form';

const Input = ({ control, name, placeholder }) => {
	const { field } = useController({
		control,
		name,
		placeholder,
	});

	return (
		<View>
			<TextInput
        		style={styles.input}
				placeholder={field.placeholder}
				value={field.value}
				onChangeText={field.onChange}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	input: {
		height: 50,
		borderWidth: 2,
		borderColor: 'grey',
		borderRadius: 10,
    marginBottom: 10,
    paddingHorizontal: 10
	},
});

export default Input;
