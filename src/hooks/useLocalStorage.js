import { useEffect, useState } from 'react';

export default function useLocalStorage(key, defaultValue = null) {
	let initialValue;
	let item = localStorage.getItem(key);
	if (item === null || item === '' || item === 'undefined')
		initialValue = defaultValue;
	else {
		try {
			initialValue = JSON.parse(item);
		} catch (error) {
			initialValue = undefined;
		}
	}
	const [state, setState] = useState(initialValue);
	useEffect(() => {
		try {
			localStorage.setItem(key, JSON.stringify(state));
		} catch (error) {
			//console.log(error);
			localStorage.removeItem(key);
		}
	}, [state, key]);
	return { state, setState };
}
