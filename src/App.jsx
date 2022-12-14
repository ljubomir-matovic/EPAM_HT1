import React, { useEffect, useState } from 'react';
import './App.css';
import Courses from './components/Courses/Courses';
import CreateCourse from './components/CreateCourse/CreateCourse';
import Header from './components/Header/Header';
import { AuthorsContext, CoursesContext, CreateCourseContext } from './context';
import useLocalStorage from './hooks/useLocalStorage';
import {
	AUTHORS,
	COURSES,
	mockedAuthorsList,
	mockedCoursesList,
} from './constants';
function App() {
	const [createCourse, setCreateCourse] = useState(false);
	const { state: courses, setState: setCourses } = useLocalStorage(
		COURSES,
		mockedCoursesList
	);
	const { state: authors, setState: setAuthors } = useLocalStorage(
		AUTHORS,
		mockedAuthorsList
	);
	useEffect(() => {
		document.title = 'Courses';
	}, []);
	return (
		<CreateCourseContext.Provider value={{ setCreateCourse }}>
			<CoursesContext.Provider value={{ courses, setCourses }}>
				<AuthorsContext.Provider value={{ authors, setAuthors }}>
					<div className='components-container'>
						<Header />
						{createCourse ? <CreateCourse /> : <Courses />}
					</div>
				</AuthorsContext.Provider>
			</CoursesContext.Provider>
		</CreateCourseContext.Provider>
	);
}

export default App;
