import React, { useState } from 'react';
import { mockedCoursesList } from '../../constants';
import EmptyCourseList from '../EmptyCourseList/EmptyCourseList';
import CourseCard from './components/CourseCard/CourseCard';
import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';
import './Courses.css';

const Courses = ({ selectCourseInfo }) => {
	const [searchValue, setSearchValue] = useState('');
	const courseList = () => {
		return mockedCoursesList.map((course) => (
			<CourseCard
				key={course.id}
				course={course}
				selectCourseInfo={selectCourseInfo}
			/>
		));
	};

	const inputHandler = () => {};
	const searchHandler = () => {};
	return (
		<>
			{mockedCoursesList.length ? (
				<div>
					<div className='topContainer'>
						<div className='searchbar'>
							<Input inputHandler={inputHandler} inputValue={searchValue} />
							<Button buttonText='search' buttonTrigger={searchHandler} />
						</div>
						<Button buttonText='add new course' buttonTrigger={() => {}} />
					</div>
					{courseList()}
				</div>
			) : (
				<EmptyCourseList />
			)}
		</>
	);
};

export default Courses;
