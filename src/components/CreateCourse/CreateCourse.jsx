import React, {
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useRef,
	useState,
} from 'react';
import Input from '../../common/Input/Input';
import Button from '../../common/Button/Buton';
import {
	AuthorsContext,
	CoursesContext,
	CreateCourseContext,
} from '../../context';
import Textarea from '../../common/Textarea/Textarea';
import './CreateCourse.css';
import { v4 } from 'uuid';
import useArray from '../../hooks/useArray';
import dateGeneratrop from '../../helpers/dateGeneratrop';
import pipeDuration from '../../helpers/pipeDuration';
import AuthorsList from './components/AuthorsList/AutorsList';
export default function CreateCourse() {
	const { setCreateCourse } = useContext(CreateCourseContext);
	const { setCourses } = useContext(CoursesContext);
	const { append: appendCourse } = useArray(setCourses);
	const { authors, setAuthors } = useContext(AuthorsContext);
	const { append: appendAuthor } = useArray(setAuthors);
	const [courseAuthors, setCourseAuthors] = useState([]);
	const [duration, setDuration] = useState(0);
	const { append: appendCourseAuthor, remove: removeCourseAuthor } =
		useArray(setCourseAuthors);
	const compareAuthors = useCallback(
		(currentValue, value) => currentValue.id === value.id,
		[]
	);
	useEffect(() => {
		console.log(courseAuthors);
	}, [courseAuthors]);
	const otherAuthors = useMemo(
		() =>
			authors.filter(
				(author) =>
					courseAuthors.findIndex((ca) => compareAuthors(ca, author)) === -1
			),
		[compareAuthors, authors, courseAuthors]
	);
	let createCourseForm = useMemo(() => ({}), []);
	createCourseForm.title = useRef();
	createCourseForm.description = useRef();
	createCourseForm.duration = useRef();
	const submitCourse = useCallback(
		(event) => {
			event.preventDefault();
			let condition = Object.values(createCourseForm).every((item) =>
				item.current.checkValidity()
			);
			if (!condition) {
				alert('Please, fill in all fields');
				return;
			}
			if (courseAuthors?.length === 0) {
				alert('Course must have at lease one author');
			}
			let newCourse = {
				id: v4(),
				title: createCourseForm.title.current.value,
				description: createCourseForm.title.current.value,
				creationDate: dateGeneratrop(),
				duration: createCourseForm.duration.current.value,
				authors: courseAuthors.map((author) => author.id),
			};
			Object.values(createCourseForm).forEach(
				(item) => (item.current.value = '')
			);
			appendCourse(newCourse);
			setCreateCourse(false);
		},
		[setCreateCourse, createCourseForm, appendCourse, courseAuthors]
	);
	const newAuthorRef = useRef();
	const submitAuthor = useCallback(
		(event) => {
			event.preventDefault();
			if (!newAuthorRef.current.checkValidity()) {
				alert('Please, enter author name');
				return;
			}
			const newAuthor = {
				id: v4(),
				name: newAuthorRef.current.value,
			};
			appendAuthor(newAuthor);
			newAuthorRef.current.value = '';
		},
		[appendAuthor]
	);
	return (
		<>
			<main className='create-course'>
				<div className='header'>
					<Input
						placeholder='Enter title...'
						name='title'
						required
						inputRef={createCourseForm.title}
						labelText='Title'
					/>
					<div>
						<Button text='Create course' onClick={submitCourse} />
					</div>
				</div>
				<Textarea
					name='description'
					required
					minLength={2}
					inputRef={createCourseForm.description}
					placeholder='Enter description'
					labelText='Description'
				/>
				<div className='authors-and-duration'>
					<form className='create-author'>
						<div className='absolute-center'>
							<h1>Add author</h1>
						</div>
						<div className='absolute-center'>
							<Input
								required
								labelText='Author name'
								placeholder='Enter author name...'
								className='input'
								inputRef={newAuthorRef}
								style={{ width: '100%' }}
							/>
						</div>
						<div className='absolute-center'>
							<Button text='Create author' onClick={submitAuthor} />
						</div>
					</form>
					<AuthorsList
						title='Authors'
						list={otherAuthors}
						action={appendCourseAuthor}
						buttonText='Add author'
					/>
					<div className='duration'>
						<h1>Duration</h1>
						<Input
							inputRef={createCourseForm.duration}
							labelText='Duration'
							placeholder='Enter duration in minutes...'
							type='number'
							onChange={(event) => setDuration(event.target.value)}
						/>
						<p>
							Duration: <b>{pipeDuration(duration)}</b> hours
						</p>
					</div>
					<AuthorsList
						title='Course authors'
						list={courseAuthors}
						action={(value) => removeCourseAuthor(value, compareAuthors)}
						buttonText='Remove author'
					/>
				</div>
			</main>
		</>
	);
}
