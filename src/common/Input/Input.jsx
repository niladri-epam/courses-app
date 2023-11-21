import React from 'react';
import './Input.css';

const Input = ({ inputValue, inputHandler }) => {
	return (
		<input
			className='textinput'
			type='text'
			onChange={inputHandler}
			value={inputValue}
			placeholder='Input text'
		/>
	);
};

export default Input;
