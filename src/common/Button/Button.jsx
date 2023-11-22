import React from 'react';
import './Button.css';

const Button = ({ buttonText, buttonTrigger, type = 'button', children }) => {
	return (
		<button className='btn' type={type} onClick={buttonTrigger}>
			{buttonText ? buttonText : children}
		</button>
	);
};

export default Button;
