import React, { useEffect, useState } from 'react';
import Logo from './components/Logo/Logo';
import Button from '../../common/Button/Button';
import './Header.css';
import { useNavigate } from 'react-router-dom';

const Header = () => {
	const navigate = useNavigate();

	const [user, setUser] = useState({ name: '', email: '' });
	const logoutHandler = () => {
		localStorage.setItem('apiToken', '');
		localStorage.setItem('userDetail', '');
		setTimeout(() => {
			navigate('/login');
		}, 500);
	};
	useEffect(() => {
		const user = localStorage.getItem('userDetail');
		if (user) {
			setUser({ name: user.name, email: user.email });
		}
	}, []);

	return (
		<div className='header'>
			<div className='logoContainer'>
				<Logo />
			</div>
			<div className='user'>
				<div className='username'>
					<p>{user.name}</p>
				</div>
				<Button buttonText='Logout' buttonTrigger={logoutHandler} />
			</div>
		</div>
	);
};

export default Header;
