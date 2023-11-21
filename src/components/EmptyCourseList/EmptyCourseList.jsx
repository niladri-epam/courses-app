import React from 'react';
import './EmptyCourseList.css';
import Button from '../../common/Button/Button';

const EmptyCourseList = () => {
	return (
		<div className='emptyContainer'>
			<h2 className='emptyHeader'>Your List is Empty</h2>
			<p className='addCourseDescription'>
				Please use &#39;Add New Course&#39; to add your first course
			</p>
			<Button buttonText='add new course' buttonTrigger={() => {}} />
		</div>
	);
};

export default EmptyCourseList;
