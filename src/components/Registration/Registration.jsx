import React, { useEffect, useState } from 'react';
import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import './Registration.css';
import { makeRequest } from '../../helpers/apiTrigger';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
	const navigate = useNavigate();

	useEffect(() => {
		const apiToken = localStorage.getItem('apiToken');
		if (apiToken) {
			navigate('/');
		}
	}, []);

	const [name, setName] = useState({ value: '', error: '' });
	const [email, setEmail] = useState({ value: '', error: '' });
	const [password, setPassword] = useState({ value: '', error: '' });
	const registrationHandler = async (e) => {
		e.preventDefault();
		let errorFlag = false;
		if (!name.value.trim()) {
			setName({ ...name, error: 'Enter valid name' });
			errorFlag = true;
		}

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

		const data = await makeRequest('http://localhost:4000/register', 'POST', {
			name: name.value,
			email: email.value,
			password: password.value,
		});

		if (data && data.successful) {
			alert(`Success: ${data.result.toString()}`);
		} else {
			alert(`Error: ${data.result.toString()}`);
			return;
		}

		setTimeout(() => {
			navigate('/login');
		}, 300);
	};

	const inputChangeHandler = (e) => {
		const elem = e.target;
		if (elem.name === 'name') {
			setName({ ...name, value: elem.value });
		}

		if (elem.name === 'email') {
			setEmail({ ...email, value: elem.value });
		}

		if (elem.name === 'password') {
			setPassword({ ...password, value: elem.value });
		}
	};

	return (
		<div className='wrapper'>
			<div className='container'>
				<h2 className='registrationHeader'>Registration</h2>
				<form className='registrationForm' onSubmit={registrationHandler}>
					<Input
						style={{ marginBottom: '10px' }}
						inputHandler={inputChangeHandler}
						inputValue={name.value}
						label={'Name'}
						name={'name'}
						error={name.error}
						margin={'marginVertical'}
					/>
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
					<Button
						buttonText='Register'
						type='submit'
						buttonTrigger={() => {}}
					/>
				</form>
			</div>
		</div>
	);
};

export default Registration;
