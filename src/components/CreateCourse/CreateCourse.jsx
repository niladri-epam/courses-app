import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import { useNavigate } from 'react-router-dom';
import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';
import './CreateCourse.css';
import { mockedAuthorsList, mockedCoursesList } from '../../constants';
import AuthorItem from './components/AuthorItem/AuthorItem';

const CreateCourse = () => {
	const navigate = useNavigate();
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [user, setUser] = useState({ email: '', name: '' });
	const [allAuthors, setAllAuthors] = useState([]);
	const [existingAuthors, setExistingAuthors] = useState([]);
	const [title, setTitle] = useState({ value: '', error: '' });
	const [description, setDescription] = useState({ value: '', error: '' });
	const [duration, setDuration] = useState({ value: 0, error: '' });
	const [author, setAuthor] = useState({ value: '', error: '' });

	useEffect(() => {
		let user = localStorage.getItem('userDetail');
		const apiToken = localStorage.getItem('apiToken');

		if (apiToken) {
			setIsLoggedIn(true);
			if (user) {
				user = JSON.parse(user);
				setUser({ name: user.name, email: user.email });
			}
		} else {
			navigate('/courses');
		}
		setAllAuthors(mockedAuthorsList);
	}, []);

	const logoutHandler = () => {
		localStorage.setItem('apiToken', '');
		localStorage.setItem('userDetail', '');
		setIsLoggedIn(false);
		navigate('/courses');
	};

	const addCourseAuthorHandler = (id) => {
		let au = allAuthors.findIndex((a) => a.id === id);
		setExistingAuthors([...existingAuthors, allAuthors[au]]);
		let existingAllAuthors = [...allAuthors];
		existingAllAuthors.splice(au, 1);
		setAllAuthors(existingAllAuthors);
	};

	const removeAuthorHandler = (id) => {
		let au = allAuthors.findIndex((a) => a.id === id);
		let existingAllAuthors = [...allAuthors];
		existingAllAuthors.splice(au, 1);
		setAllAuthors(existingAllAuthors);
	};

	const removeCourseAuthorHandler = (id) => {
		let au = existingAuthors.findIndex((a) => a.id === id);

		setAllAuthors([...allAuthors, { ...existingAuthors[au] }]);
		let currentExistingAuthors = [...existingAuthors];
		currentExistingAuthors.splice(au, 1);
		setExistingAuthors([...currentExistingAuthors]);
	};

	const createAuthorHandler = () => {
		console.log(author);
		if (author.value.length < 2) {
			setAuthor({ ...author, error: 'Author is required' });
			return;
		}

		setAllAuthors([
			...allAuthors,
			{ id: new Date().getTime(), name: author.value },
		]);
	};

	const formatDuration = () => {
		const hours = Math.floor(parseInt(duration.value) / 60);
		const minutes = parseInt(duration.value) % 60;

		return `${hours < 10 ? '0' + hours : hours}:${
			minutes < 10 ? '0' + minutes : minutes
		}`;
	};

	const createCourseHandler = () => {
		let validFlag = false;

		if (title.value.trim().length < 2) {
			setTitle({ ...title, error: 'Title is required' });
			validFlag = true;
		}

		if (description.value.trim().length < 2) {
			setDescription({ ...description, error: 'Description is required' });
			validFlag = true;
		}

		if (duration.value < 1) {
			setDuration({ ...duration, error: 'Duration is required' });
			validFlag = true;
		}

		if (existingAuthors.length === 0) {
			alert('please select author');
			validFlag = true;
		}

		if (validFlag) return;
		let date = `${
			new Date().getDate() < 10
				? '0' + new Date().getDate()
				: new Date().getDate()
		} `;
		let month = `${
			new Date().getMonth() + 1 < 10
				? '0' + new Date().getMonth() + 1
				: new Date().getMonth() + 1
		}`;
		let year = `${new Date().getFullYear()}`;
		let reqBody = {
			id: new Date().getTime(),
			title: title.value,
			description: description.value,
			creationDate: `${date}/${month}/${year.slice(2)}`,
			duration: duration.value,
			authors: existingAuthors.map((a) => a.id),
		};

		mockedCoursesList.push(reqBody);
		navigate('/courses');
	};

	return (
		<div className='createCourseWrapper'>
			<Header
				user={user}
				isLoggedIn={isLoggedIn}
				logoutHandler={logoutHandler}
			/>
			<div className='createCoursecontainer'>
				<h2>Course Edit/Create Page</h2>
				<div className='createCourseForm'>
					<h3>Main Info</h3>
					<Input
						type='text'
						inputValue={title.value}
						inputHandler={(e) => setTitle({ ...title, value: e.target.value })}
						label={'Title'}
						error={title.error}
					/>
					<Input
						type='textarea'
						inputValue={description.value}
						inputHandler={(e) =>
							setDescription({ ...description, value: e.target.value })
						}
						label={'Description'}
						error={description.error}
					/>
					<div className='createCourseFooter'>
						<div className='authorsSection'>
							<div className='duration'>
								<h4>Duration</h4>
								<div className='duratonSection'>
									<Input
										type='number'
										inputValue={duration.value}
										inputHandler={(e) =>
											setDuration({ ...duration, value: e.target.value })
										}
										label={'Duration'}
										error={duration.error}
									/>
									<p className='formattedTime'>
										<b>{formatDuration()}</b> hours
									</p>
								</div>
							</div>
							<div className='authors'>
								<h4>Authors</h4>
								<div className='authorSection'>
									<Input
										type='text'
										inputValue={author.value}
										inputHandler={(e) =>
											setAuthor({ ...author, value: e.target.value })
										}
										label={'Author Name'}
										error={author.error}
									/>
									<Button
										buttonText={'create author'}
										buttonTrigger={createAuthorHandler}
									/>
								</div>
							</div>
							<div className='authors'>
								<h4>Authors List</h4>
								<div className='authorListSection'>
									<table>
										<tbody>
											{allAuthors.map((au) => (
												<AuthorItem
													au={au}
													key={au.id}
													add={true}
													existing={false}
													removeAuthorHandler={removeAuthorHandler}
													addCourseAuthorHandler={addCourseAuthorHandler}
												/>
											))}
										</tbody>
									</table>
								</div>
							</div>
						</div>
						<div className='authorList'>
							<h4>Course Authors</h4>
							<div className='courseAuthorSection'>
								<table>
									<tbody>
										{existingAuthors.map((au) => (
											<AuthorItem
												au={au}
												key={au.id}
												add={false}
												existing={true}
												removeCourseAuthorHandler={removeCourseAuthorHandler}
											/>
										))}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
				<div className='footerControls'>
					<div className='cancelCreate'>
						<Button
							buttonText={'cancel'}
							buttonTrigger={() => navigate('/courses')}
						/>
					</div>
					<div className='createbtn'>
						<Button
							buttonText={'create'}
							buttonTrigger={() => createCourseHandler()}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CreateCourse;
