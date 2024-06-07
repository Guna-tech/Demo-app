/** @format */

import { View, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { Dropdown } from 'react-native-element-dropdown';

const data = [
	{ label: 'Completed', value: '1' },
	{ label: 'Not Completed', value: '0' },
];

const DropdownElement = () => {
	const [value, setValue] = useState();
	return (
		<View>
			<Dropdown
                style={styles.dropdown}
				data={data}
				onChange={(item) => {
					setValue(item.value);
				}}
                labelField="label"
                valueField="value"
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	dropdown: {
		height: 50,
		borderWidth: 2,
		borderColor: 'grey',
		borderRadius: 10,
    marginBottom: 10,
    paddingHorizontal: 10
	},
});

export default DropdownElement;
