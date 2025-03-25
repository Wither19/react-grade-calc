import { useState } from "react";
import _ from "lodash";

import { average, sortListState } from "./functions";
import type { BlockGrade, InputEditable, BlockInfo } from "./types";

function App() {
	var classList: Array<BlockInfo> = [
		{
			block: 1,
			name: "Marine Science",
			grade: 90.16,
			isEditable: false,
		},
		{
			block: 2,
			name: "English III",
			grade: 97.58,
			isEditable: false,
		},
		{
			block: 3,
			name: "Apologetics",
			grade: 91.01,
			isEditable: false,
		},
		{
			block: 4,
			name: "Spanish II",
			honors: true,
			grade: 84.87,
			isEditable: false,
		},
		{
			block: 5,
			name: "Geometry",
			grade: 90.72,
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
			grade: 90.66,
			isEditable: false,
		},
		{
			block: 8,
			name: "US History",
			grade: 94.48,
			isEditable: false,
		},
	];

	const [classes, setClasses] = useState(
		classList.filter((item) => item.grade != null)
	);

	return (
		<>
			<table>
				<thead>
					<th>Block</th>
					<th>Class</th>
					<th>Grade</th>
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
