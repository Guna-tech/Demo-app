/** @format */

import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import Input from '../CommonElements/Input';
import { useForm, Controller } from 'react-hook-form';
import DropdownElement from '../CommonElements/Dropdown';

const AddTodo = () => {
	const {
		control,
		handleSubmit
	} = useForm();

    const onSubmit = (data) => {
        alert(JSON.stringify(data));
    }

	return (
		<View style={styles.container}>
			<Text style={styles.label}>Title</Text>
            <Input name='title' control={control}/>
            <Text style={styles.label}>Description</Text>
            <Input name='description' control={control}/>
            <Text>Status</Text>
            <DropdownElement/>
            <Button title='Add Todo' onPress={handleSubmit(onSubmit)}/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 10,
        flex: 1
	},
	label: {
		fontSize: 25,
	}
});

export default AddTodo;
