import React from 'react';
import Author from '../Author/Author';
import './AuthorsList.css';
export default function AuthorsList({ title, list, action, buttonText }) {
	return (
		<div className='authors-container'>
			<div className='absolute-center'>
				<h1>{title}</h1>
			</div>
			<div className='absolute-center'>
				{list.length > 0 ? (
					<div className='authors'>
						{list.map((a, key) => (
							<Author
								author={a}
								action={action}
								buttonText={buttonText}
								key={key}
							/>
						))}
					</div>
				) : (
					'Author list is empty'
				)}
			</div>
		</div>
	);
}
