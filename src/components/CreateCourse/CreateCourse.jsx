import React, { useCallback, useContext, useMemo, useRef } from 'react';
import Input from '../../common/Input/Input';
import Button from '../../common/Button/Buton';
import { CreateCourseContext } from '../../context';
export default function CreateCourse() {
	const { setCreateCourse } = useContext(CreateCourseContext);
	let createCourseForm = useMemo(() => ({}), []);
	createCourseForm.title = useRef();
	createCourseForm.description = useRef();
	const submit = useCallback(
		(event) => {
			event.preventDefault();
			let condition = Object.values(createCourseForm).every((item) =>
				item.current.checkValidity()
			);
			if (condition) {
				setCreateCourse(false);
			} else {
				alert('Please, fill in all fields');
			}
		},
		[setCreateCourse, createCourseForm]
	);
	return (
		<>
			<main>
				<div>
					<div>
						<div>
							<p>Title</p>
							<Input
								placeholder='Enter title...'
								name='title'
								required
								inputRef={createCourseForm.title}
							/>
						</div>
						<div>
							<Button text='Create course' onClick={submit} />
						</div>
					</div>
					<div>
						<p>Description</p>
						<textarea
							name='description'
							required
							minLength={2}
							ref={createCourseForm.description}
						></textarea>
					</div>
					<div>
						<div className='row'></div>
						<div className='row'></div>
					</div>
				</div>
			</main>
		</>
	);
}
