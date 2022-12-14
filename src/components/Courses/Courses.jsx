import React, { useCallback, useContext, useMemo, useState } from 'react';
import Button from '../../common/Button/Buton';
import { ADD_NEW_COURSE_BUTTON_TEXT } from '../../constants';
import { CoursesContext, CreateCourseContext } from '../../context';
import CourseCard from './components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';
import './Courses.css';
export default function Courses() {
	const { setCreateCourse } = useContext(CreateCourseContext);
	const [pattern, setPattern] = useState('');
	const { courses } = useContext(CoursesContext);
	const filteredCourses = useMemo(
		() =>
			courses?.filter(
				(course) =>
					pattern === '' || new RegExp(pattern, 'gi').test(course.title)
			),
		[courses, pattern]
	);
	const onChangeInput = useCallback((e) => {
		if (e.target.value === '') {
			setPattern('');
		}
	}, []);
	return (
		<main>
			<div className='header'>
				<SearchBar setPattern={setPattern} onChange={onChangeInput} />
				<div className='button-container'>
					<Button
						text={ADD_NEW_COURSE_BUTTON_TEXT}
						onClick={() => setCreateCourse(true)}
					/>
				</div>
			</div>
			{filteredCourses?.length > 0
				? filteredCourses.map((course, key) => (
						<CourseCard course={course} key={key} />
				  ))
				: null}
		</main>
	);
}
