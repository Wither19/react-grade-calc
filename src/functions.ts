import _ from "lodash";

export const average = (list: Array<any>, decimal?: number): number => {
	return parseFloat(
		(list.reduce((a, b) => a + b) / list.length).toFixed(decimal || 2)
	);
};

// Pass previous state reference to the array argument
export const sortListState = (list: Array<any>, sortType: string, ascending: boolean) {
		let newList: Array<any> = _.sortBy(list, [sortType]);
		newList = ascending ? newList : _.reverse(newList);
		return newList;
}