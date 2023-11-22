import React from 'react';
import Button from '../../../../common/Button/Button';
import { getCourseDuration } from '../../../../helpers/getCourseDuration';
import { formatCreationDate } from '../../../../helpers/formatCreationDate';
import './CourseCard.css';
import { formatAuthors } from '../../../../helpers/formatAuthors';

const CourseCard = ({ course, selectCourseInfo, isLoggedIn }) => {
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
						<div className='cardControls'>
							<div className='cardShowCourse'>
								<Button
									buttonText='show course'
									buttonTrigger={() => selectCourseInfo(course)}
								/>
							</div>
							{isLoggedIn ? (
								<>
									<div className='cardDelete'>
										<Button buttonTrigger={() => {}}>
											<span class='material-symbols-outlined'>delete</span>
										</Button>
									</div>
									<div className='cardEdit'>
										<Button buttonTrigger={() => {}}>
											<span class='material-symbols-outlined'>edit</span>
										</Button>
									</div>
								</>
							) : (
								''
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default CourseCard;
