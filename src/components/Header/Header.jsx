import React from 'react';
import Button from '../../common/Button/Buton';
import Logo from './components/Logo';
import './Header.css';
export default function Header({ borderColor }) {
	return (
		<>
			<header
				style={{
					borderColor: borderColor !== undefined ? borderColor : 'red',
				}}
				className='center-y'
			>
				<div>
					<Logo />
				</div>
				<div className='absolute-center'>
					<p>David</p>
					<Button text='Logout' />
				</div>
			</header>
		</>
	);
}
