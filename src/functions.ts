export const average = (list: Array<any>, decimal?: number): number => {
	return parseFloat(
		(list.reduce((a, b) => a + b) / list.length).toFixed(decimal || 2)
	);
};
