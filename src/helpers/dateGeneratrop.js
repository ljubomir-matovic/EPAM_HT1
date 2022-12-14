const toFormat = (day, month, year) => {
	return `${day.toString().padStart(2, '0')}.${month
		.toString()
		.padStart(2, '0')}.${year}.`;
};
const dateRegex = /^\d{1,2}\.\d{1,2}\.\d{4}\.$/;
const dateGeneratrop = (date = undefined) => {
	if (date === undefined) date = new Date();
	else {
		if (dateRegex.test(date)) {
			date = date.split('.').map((v) => Number(v));
			return toFormat(date[0], date[1], date[2]);
		}
		date = new Date(date);
	}
	return toFormat(date.getDate(), date.getMonth(), date.getFullYear());
};

export default dateGeneratrop;
