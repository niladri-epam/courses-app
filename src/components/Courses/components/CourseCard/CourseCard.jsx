import React from 'react';
import Button from '../../../../common/Button/Button';
import { getCourseDuration } from '../../../../helpers/getCourseDuration';
import { formatCreationDate } from '../../../../helpers/formatCreationDate';
import './CourseCard.css';
import { formatAuthors } from '../../../../helpers/formatAuthors';

const CourseCard = ({ course, selectCourseInfo }) => {
	const { title, description, authors, duration, creationDate } = course;
	return (
		<>
			<div className='card'>
				<h2 className='cardTitle'>{title}</h2>
				<div className='cardContent'>
					<div className='cardBody'>
						<p className='cardDescription'>{description}</p>
					</div>
					<div className='cardFooter'>
						<div className='cardExtraInfo'>
							<p className='cardExtraInfoElement authors'>
								<span>Authors:</span> {formatAuthors(authors)}
							</p>
							<p className='cardExtraInfoElement'>
								<span>Duration:</span> {getCourseDuration(duration)}
							</p>
							<p className='cardExtraInfoElement'>
								<span>Created:</span> {formatCreationDate(creationDate)}
							</p>
						</div>
						<Button
							buttonText='show course'
							buttonTrigger={() => selectCourseInfo(course)}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default CourseCard;
