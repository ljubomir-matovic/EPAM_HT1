import React from 'react';
import '../Input/Input.css';
import './Textarea.css';

export default function Textarea({
	inputRef,
	labelText = '',
	id,
	className = 'default-textarea',
	...otherProps
}) {
	return (
		<div className='input-container'>
			{labelText.length > 0 ? <label htmlFor={id}>{labelText}</label> : null}
			<textarea
				ref={inputRef}
				id={id}
				{...otherProps}
				className={className}
			></textarea>
		</div>
	);
}
