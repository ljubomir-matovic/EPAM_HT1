import React from 'react';
import './Input.css';
export default function Input({
	className,
	placeholder,
	onChange,
	ref,
	type,
	style,
}) {
	return (
		<input
			type={type === undefined ? 'text' : type}
			onChange={onChange}
			placeholder={placeholder}
			ref={ref}
			className={className === undefined ? 'default-input' : className}
			style={style}
		/>
	);
}
