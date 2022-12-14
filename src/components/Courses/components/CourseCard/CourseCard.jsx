import React, { useContext, useMemo } from 'react';
import Button from '../../../../common/Button/Buton';
import { AuthorsContext } from '../../../../context';
import pipeDuration from '../../../../helpers/pipeDuration';
import dateGeneratrop from '../../../../helpers/dateGeneratrop';
import './CourseCard.css';
export default function CourseCard({ course }) {
	const { authors } = useContext(AuthorsContext);
	const courseAuthors = useMemo(
		() =>
			course.authors
				.map((authorId) => authors.find((a) => a?.id === authorId)?.name)
				.join(', '),
		[course, authors]
	);
	return (
		<>
			<div className='course-card'>
				<div className='column'>
					<div className='title'>
						<h1>{course.title}</h1>
					</div>
					<div>{course.description}</div>
				</div>
				<div className='column'>
					<div className='authors-text'>
						<b>Authors:&nbsp;</b>
						{courseAuthors}
					</div>
					<div>
						<b>Duration:&nbsp;</b>
						{pipeDuration(course.duration)} hours
					</div>
					<div>
						<b>Created:&nbsp;</b>
						{dateGeneratrop(course.creationDate)}
					</div>
					<div className='show-button'>
						<Button text='Show more' />
					</div>
				</div>
			</div>
		</>
	);
}
