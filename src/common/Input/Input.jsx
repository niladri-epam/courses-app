import React from 'react';
import './Input.css';

const Input = ({
	inputValue,
	inputHandler,
	label,
	type = 'text',
	name,
	error,
	margin,
}) => {
	return (
		<div className={`inputGroup ${margin ? margin : ''}`}>
			{label ? <label>{label}</label> : ''}
			<input
				className={`textinput ${error ? 'errorInput' : ''}`}
				type={type}
				onChange={inputHandler}
				value={inputValue}
				placeholder='Input text'
				name={name}
			/>
			{error ? <p>{error}</p> : ''}
		</div>
	);
};

export default Input;
