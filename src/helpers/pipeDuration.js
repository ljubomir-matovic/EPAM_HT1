const pipeDuration = (duration) => {
	duration = Number(duration);
	if (isNaN(duration)) throw new Error('NaN');
	let hours = Number.parseInt(duration / 60);
	let minutes = Number.parseInt(duration) % 60;
	return `${hours}:${minutes}`;
};

export default pipeDuration;
