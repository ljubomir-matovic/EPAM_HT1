// for setMethod create append in array and remove from array methods
export default function useArray(setMethod) {
	const append = (value) => setMethod((previous) => [...previous, value]);
	const remove = (
		value,
		comparator = (currentValue, value) => currentValue === value
	) => setMethod((previous) => previous.filter((v) => !comparator(v, value)));
	return { append, remove };
}
