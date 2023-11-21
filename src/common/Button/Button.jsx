import React from 'react';
import './Button.css';

const Button = ({ buttonText, buttonTrigger, type = 'button' }) => {
	return (
		<button className='btn' type={type} onClick={buttonTrigger}>
			{buttonText}
		</button>
	);
};

export default Button;
