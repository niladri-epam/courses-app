import React from 'react';
import './CourseInfo.css';
import { formatAuthors } from '../../helpers/formatAuthors';
import { formatCreationDate } from '../../helpers/formatCreationDate';
import { getCourseDuration } from '../../helpers/getCourseDuration';
import Button from '../../common/Button/Button';

const CourseInfo = ({ course, selectCourseInfo }) => {
	const duration = getCourseDuration(course.duration).split(' ');
	return (
		<div className='courseInfo'>
			<h1>{course.title}</h1>
			<div className='courseInfoContainer'>
				<div className='courseInfoSubContainer'>
					<div className='courseInfoBody'>
						<h3>Description</h3>
						<p>{course.description}</p>
					</div>
					<div className='courseMetaData'>
						<table>
							<tbody>
								<tr>
									<td>
										<b>ID:</b>
									</td>
									<td>{course.id}</td>
								</tr>
								<tr>
									<td>
										<b>Duration:</b>
									</td>
									<td>
										<b>{duration[0]}</b> {duration[1]}
									</td>
								</tr>
								<tr>
									<td>
										<b>Created:</b>
									</td>
									<td>{formatCreationDate(course.creationDate)}</td>
								</tr>
								<tr>
									<td>
										<b>Authors:</b>
									</td>
									<td>{formatAuthors(course.authors)}</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
			<div className='back'>
				<Button
					buttonText='back'
					buttonTrigger={() => selectCourseInfo(null)}
				/>
			</div>
		</div>
	);
};

export default CourseInfo;
