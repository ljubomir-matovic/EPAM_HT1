import React, { useCallback, useRef } from 'react';
import Input from '../../../../common/Input/Input';
import Button from '../../../../common/Button/Buton';
import {
	INPUT_SEARCH_PLACEHOLDER,
	SEARCH_BUTTON_TEXT,
} from '../../../../constants';
import './SearchBar.css';
export default function SearchBar({ onChange, setPattern }) {
	const inputRef = useRef();
	const onClick = useCallback(() => {
		setPattern(inputRef.current.value);
	}, [setPattern]);
	return (
		<div className='search-bar'>
			<Input
				placeholder={INPUT_SEARCH_PLACEHOLDER}
				onChange={onChange}
				inputRef={inputRef}
			/>
			<Button text={SEARCH_BUTTON_TEXT} onClick={onClick} />
		</div>
	);
}
