import React from 'react';
import Button from '../../common/Button/Buton';
import { ADD_NEW_COURSE_BUTTON_TEXT } from '../../constants';
import SearchBar from './components/SearchBar/SearchBar';
import './Courses.css';
export default function Courses() {
	return (
		<main>
			<div className='header'>
				<SearchBar />
				<div>
					<Button text={ADD_NEW_COURSE_BUTTON_TEXT} />
				</div>
			</div>
		</main>
	);
}
