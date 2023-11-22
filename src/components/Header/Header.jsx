import React, { useEffect, useState } from 'react';
import Logo from './components/Logo/Logo';
import Button from '../../common/Button/Button';
import './Header.css';
import { useNavigate } from 'react-router-dom';

const Header = ({ user, isLoggedIn, logoutHandler }) => {
	const navigate = useNavigate();

	const loginHandler = () => {
		navigate('/login');
	};

	return (
		<div className='header'>
			<div className='logoContainer'>
				<Logo />
			</div>
			<div className='user'>
				{isLoggedIn ? (
					<div className='username'>
						<p>{user.name}</p>
					</div>
				) : (
					''
				)}
				{isLoggedIn ? (
					<Button buttonText='Logout' buttonTrigger={logoutHandler} />
				) : (
					<Button buttonText='Login' buttonTrigger={loginHandler} />
				)}
			</div>
		</div>
	);
};

export default Header;
