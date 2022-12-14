import React from 'react';
import Button from '../../common/Button/Buton';
import { LOGOUT_BUTTON_TEXT } from '../../constants';
import Logo from './components/Logo';
import './Header.css';
export default function Header({
	borderColor = 'red',
	className = 'center-y',
}) {
	return (
		<>
			<header
				style={{
					borderColor: borderColor,
				}}
				className={className}
			>
				<div>
					<Logo />
				</div>
				<div className='absolute-center'>
					<p>David</p>
					<Button text={LOGOUT_BUTTON_TEXT} />
				</div>
			</header>
		</>
	);
}
