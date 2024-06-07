import axios from 'axios';

export const fetchTodoList = async () => {
	const { data } = await axios.get(
		'https://jsonplaceholder.typicode.com/todos?_page=1'
	);
	return data;
};