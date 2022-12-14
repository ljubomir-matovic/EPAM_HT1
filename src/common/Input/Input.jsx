import React from 'react';
import './Input.css';
export default function Input({
	className = 'default-input',
	placeholder,
	onChange,
	inputRef,
	type = 'text',
	style,
	name,
	required = false,
	id,
	labelText = '',
	value,
	...otherProps
}) {
	return (
		<div className='input-container'>
			{labelText.length > 0 ? <label htmlFor={id}>{labelText}</label> : null}
			<input
				type={type}
				onChange={onChange}
				placeholder={placeholder}
				ref={inputRef}
				className={className}
				style={style}
				name={name}
				required={required}
				id={id}
				value={value}
				{...otherProps}
			/>
		</div>
	);
}
