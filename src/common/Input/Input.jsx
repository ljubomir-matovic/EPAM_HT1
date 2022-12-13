import React from 'react';
import './Input.css';
export default function Input({
	className,
	placeholder,
	onChange,
	inputRef,
	type,
	style,
	name,
	required,
}) {
	return (
		<input
			type={type === undefined ? 'text' : type}
			onChange={onChange}
			placeholder={placeholder}
			ref={inputRef}
			className={className === undefined ? 'default-input' : className}
			style={style}
			name={name}
			required={required || false}
		/>
	);
}
