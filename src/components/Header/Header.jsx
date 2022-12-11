import React from 'react';
import Button from '../../common/Button/Buton';
import { LOGOUT_BUTTON_TEXT } from '../../constants';
import Logo from './components/Logo';
import './Header.css';
export default function Header({ borderColor, className }) {
	return (
		<>
			<header
				style={{
					borderColor: borderColor !== undefined ? borderColor : 'red',
				}}
				className={className === undefined ? 'center-y' : className}
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
