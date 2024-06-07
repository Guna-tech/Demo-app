/** @format */

import {
	View,
	Text,
	ActivityIndicator,
	FlatList,
    Button
} from 'react-native';
import React, { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchTodoList } from '../service/Todo';
import FlatListItem from '../CommonElements/FlatListItem';

const Todos = ({navigation}) => {

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
              <Button onPress={() => {navigation.navigate('AddTodo')}} title="+" />
            ),
        });
    }, []);

	const {
		data: todoList,
		isLoading,
		error,
	} = useQuery({ queryKey: ['fetchTodo'], queryFn: fetchTodoList});

	if (isLoading) {
		return (
			<ActivityIndicator
				size={80}
				style={{ justifyContent: 'center', flex: 1 }}
			/>
		);
	}

	if (error) {
		return <Text>Error fecthing todo list: {error.message}</Text>;
	}

	const deleteTodo = (index) => {
		todoList.splice(index, 1);
		alert(JSON.stringify(todoList));
	}

	return (
		<FlatList
			data={todoList}
			renderItem={({item, index}) => <FlatListItem todo={item} deleteTodo={deleteTodo} index={index}/>}
			keyExtractor={(item) => item.id.toString()}
			extraData={this.state}
		/>
	);
};

export default Todos;
