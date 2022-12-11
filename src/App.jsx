import React, { useState } from 'react';
import './App.css';
import Courses from './components/Courses/Courses';
import CreateCourse from './components/CreateCourse/CreateCourse';
import Header from './components/Header/Header';
import { CreateCourseContext } from './context';
function App() {
	const [createCourse, setCreateCourse] = useState(false);
	return (
		<CreateCourseContext.Provider value={{ setCreateCourse }}>
			<div className='components-container'>
				<Header />
				{createCourse ? <CreateCourse /> : <Courses />}
			</div>
		</CreateCourseContext.Provider>
	);
}

export default App;
