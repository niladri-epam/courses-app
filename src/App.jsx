import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import CourseInfo from './components/CourseInfo/CourseInfo';

const App = () => {
	const navigate = useNavigate();
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [user, setUser] = useState({ email: '', name: '' });
	useEffect(() => {
		let user = localStorage.getItem('userDetail');
		const apiToken = localStorage.getItem('apiToken');

		if (apiToken) {
			setIsLoggedIn(true);
			if (user) {
				user = JSON.parse(user);
				setUser({ name: user.name, email: user.email });
			}
		}
	}, []);

	const logoutHandler = () => {
		localStorage.setItem('apiToken', '');
		localStorage.setItem('userDetail', '');
		setIsLoggedIn(false);
	};

	const [courseInfo, setCourseInfo] = useState(null);
	const selectCourseInfo = (course) => {
		setCourseInfo(course);
	};

	return (
		<>
			<Header
				user={user}
				isLoggedIn={isLoggedIn}
				logoutHandler={logoutHandler}
			/>
			<div className='container'>
				{courseInfo ? (
					<CourseInfo course={courseInfo} selectCourseInfo={selectCourseInfo} />
				) : (
					<Courses
						selectCourseInfo={selectCourseInfo}
						isLoggedIn={isLoggedIn}
					/>
				)}
			</div>
		</>
	);
};

export default App;
