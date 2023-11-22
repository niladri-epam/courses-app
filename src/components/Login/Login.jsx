import React, { useEffect, useState } from 'react';
import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import './Login.css';
import { makeRequest } from '../../helpers/apiTrigger';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState({ value: '', error: '' });
	const [password, setPassword] = useState({ value: '', error: '' });

	useEffect(() => {
		const apiToken = localStorage.getItem('apiToken');
		if (apiToken) {
			navigate('/');
		}
	}, []);

	const loginHandler = async (e) => {
		e.preventDefault();
		let errorFlag = false;

		if (
			!email.value.match(
				/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
			)
		) {
			setEmail({ ...email, error: 'Enter valid email' });
			errorFlag = true;
		}

		if (password.value.trim().length < 6) {
			setPassword({ ...password, error: 'Enter valid password' });
			errorFlag = true;
		}

		if (errorFlag) return;

		const data = await makeRequest('http://localhost:4000/login', 'POST', {
			email: email.value,
			password: password.value,
		});

		if (data && data.successful) {
			localStorage.setItem('apiToken', data.result);
			localStorage.setItem('userDetail', JSON.stringify(data.user));
		} else {
			alert(`Error: ${data.result.toString()}`);
			return;
		}

		setTimeout(() => {
			navigate('/');
		}, 300);
	};

	const inputChangeHandler = (e) => {
		const elem = e.target;

		if (elem.name === 'email') {
			setEmail({ ...email, value: elem.value });
		}

		if (elem.name === 'password') {
			setPassword({ ...password, value: elem.value });
		}
	};

	return (
		<div className='authWrapper'>
			<div className='authContainer'>
				<h2 className='registrationHeader'>Login</h2>
				<form className='registrationForm' onSubmit={loginHandler}>
					<Input
						style={{ marginBottom: '10px' }}
						inputHandler={inputChangeHandler}
						inputValue={email.value}
						label={'Email'}
						name={'email'}
						error={email.error}
						margin={'marginVertical'}
					/>
					<Input
						style={{ marginBottom: '10px' }}
						inputHandler={inputChangeHandler}
						inputValue={password.value}
						label={'Password'}
						error={password.error}
						name='password'
						margin={'marginVertical'}
						type='password'
					/>
					<Button buttonText='Login' type='submit' buttonTrigger={() => {}} />
					<p>
						If you don't have an account you may{' '}
						<Link to={'/registration'}>
							<b>Registration</b>
						</Link>
					</p>
				</form>
			</div>
		</div>
	);
};

export default Login;
