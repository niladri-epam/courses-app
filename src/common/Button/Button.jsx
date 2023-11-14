import React from 'react';
import './Button.css';

const Button = ({ buttonText, buttonTrigger }) => {
	return (
		<button className='btn' onClick={buttonTrigger}>
			{buttonText}
		</button>
	);
};

export default Button;
