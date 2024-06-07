/** @format */

import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PaperProvider } from 'react-native-paper';

import Todos from './src/components/Todos';
import AddTodo from './src/components/AddTodo';

export default function App() {
	const client = new QueryClient();
	const Stack = createNativeStackNavigator();

	return (
		<QueryClientProvider client={client}>
			<PaperProvider>
				<NavigationContainer>
					<Stack.Navigator>
						<Stack.Screen name="Todo" component={Todos}/>
						<Stack.Screen name="AddTodo" component={AddTodo}/>
					</Stack.Navigator>
				</NavigationContainer>
			</PaperProvider>
		</QueryClientProvider>
	);
}
