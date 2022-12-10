import React from 'react';
import './Button.css';
export default function Button({ className, text, onClick }) {
	return (
		<button
			className={
				className === undefined ? 'default-button absolute-center' : className
			}
			onClick={onClick}
		>
			{text}
		</button>
	);
}
