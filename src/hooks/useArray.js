export default function useArray(setMethod) {
	const append = (value) => setMethod((previous) => [...previous, value]);
	const remove = (value) =>
		setMethod((previous) => previous.filter((v) => v !== value));
	return { append, remove };
}
