const dateGeneratrop = () => {
	let date = new Date();
	return `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}.`;
};

export default dateGeneratrop;
