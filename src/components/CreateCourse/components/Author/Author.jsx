import React, { useCallback } from 'react';
import Button from '../../../../common/Button/Buton';
import './Author.css';
export default function Author({ author, buttonText, action }) {
	const clickHandler = useCallback((event) => action(author), [action, author]);
	return (
		<>
			<div style={{ textAlign: 'left', width: '100%' }}>
				<p>{author?.name}</p>
			</div>
			<Button text={buttonText} onClick={clickHandler} />
		</>
	);
}
