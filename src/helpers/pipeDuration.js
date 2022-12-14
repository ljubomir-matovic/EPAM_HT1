// minutes => hh:mm format
const pipeDuration = (duration) => {
	duration = Number(duration);
	if (isNaN(duration)) throw new Error('NaN');
	let hours = Number.parseInt(duration / 60);
	let minutes = Number.parseInt(duration) % 60;
	return `${hours.toString().padStart(2, '0')}:${minutes
		.toString()
		.padStart(2, '0')}`;
};

export default pipeDuration;
