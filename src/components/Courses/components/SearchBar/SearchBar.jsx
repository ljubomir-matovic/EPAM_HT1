import React from 'react';
import Input from '../../../../common/Input/Input';
import Button from '../../../../common/Button/Buton';
import {
	INPUT_SEARCH_PLACEHOLDER,
	SEARCH_BUTTON_TEXT,
} from '../../../../constants';
import './SearchBar.css';
export default function SearchBar() {
	return (
		<div className='search-bar'>
			<Input placeholder={INPUT_SEARCH_PLACEHOLDER} />
			<Button text={SEARCH_BUTTON_TEXT} />
		</div>
	);
}
