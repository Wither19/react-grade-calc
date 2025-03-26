import { useEffect, useState } from "react";
import _ from "lodash";

import { average, sortListState } from "./functions";
import type { BlockInfo } from "./types";
import { BsSortDownAlt, BsSortUpAlt } from "react-icons/bs";

function App() {
	var classList: Array<BlockInfo> = [
		{
			block: 1,
			name: "Marine Science",
			grade: 93.75,
			isEditable: false,
		},
		{
			block: 2,
			name: "English III",
			grade: 97.01,
			isEditable: false,
		},
		{
			block: 3,
			name: "Apologetics",
			grade: 92.68,
			isEditable: false,
		},
		{
			block: 4,
			name: "Spanish II",
			honors: true,
			grade: 87.44,
			isEditable: false,
		},
		{
			block: 5,
			name: "Geometry",
			grade: 90.92,
			isEditable: false,
		},
		{
			block: 6,
			name: "Study Hall",
			grade: null,
			isEditable: false,
		},
		{
			block: 7,
			name: "Computer Science Essentials",
			honors: true,
			grade: 93.26,
			isEditable: false,
		},
		{
			block: 8,
			name: "US History",
			grade: 94.1,
			isEditable: false,
		},
	];

	const [classes, setClasses] = useState<Array<any>>(
		classList.filter((item) => item.grade != null)
	);
	const [sortAscending, setAscending] = useState<boolean>(true);
	const [sortType, setSortType] = useState<string>("block");

	const handleSortButton = () => {
		setAscending((prev) => !prev);
	};

	const sortDataTypeChange = (sorting: string) => {
		setSortType(sorting);
	};

	useEffect(() => {
		setClasses((prev) => sortListState(prev, sortType, sortAscending));
	}, [sortAscending, sortType]);

	return (
		<>
			<button onClick={handleSortButton}>
				{sortAscending ? <BsSortUpAlt /> : <BsSortDownAlt />}
			</button>
			<table>
				<thead>
					<tr>
						<th onClick={(e) => sortDataTypeChange(e.currentTarget.innerText)}>
							Block
						</th>
						<th>Class</th>
						<th>Grade</th>
					</tr>
				</thead>
				<tbody>
					{classes
						.filter((item) => item.grade != null)
						.map((item, index) => (
							<tr key={`class-${index}`}>
								<td>{item.block}</td>
								<td>
									{item.ap ? "AP " : ""}
									{item.name}
									{item.honors ? " Honors" : ""}
								</td>
								<td>{item.grade}%</td>
							</tr>
						))}
				</tbody>
			</table>
			<br />
			<h2>Average Grade</h2>
			<span>{average(classes.map((item) => item.grade))}%</span>
		</>
	);
}

export default App;
