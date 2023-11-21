import React from 'react';
import Logo from './components/Logo/Logo';
import Button from '../../common/Button/Button';
import './Header.css';

const Header = () => {
	const loginHandler = () => {};
	return (
		<div className='header'>
			<div className='logoContainer'>
				<Logo />
			</div>
			<div className='user'>
				{/* <div className='username'>
					<p>Niladri mmMahato</p>
				</div> */}
				<Button buttonText='Logout' buttonTrigger={loginHandler} />
			</div>
		</div>
	);
};

export default Header;
