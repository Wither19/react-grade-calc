import React, { useEffect, useState } from "react";

import _ from "lodash";

import "../scss/App.scss";

type BlockGrade = {
	block: number;
	name: string;
	honors?: boolean;
	ap?: boolean;
	grade: number | null;
};

type InputEditable = {
	isEditable: boolean;
};

function App() {
	var classList: Array<BlockGrade & InputEditable> = [
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

	const average = (list: Array<any>, decimal?: number): number => {
		return parseFloat(
			(list.reduce((a, b) => a + b) / list.length).toFixed(decimal || 2)
		);
	};

	const [classes, setClasses] = useState(classList);
	const [grades, setGrades] = useState(_.map(classes, (c) => c.grade));
	const [omitNoGrade, setOmitNoGrade] = useState(false);

	useEffect(() => {
		if (omitNoGrade) {
			setClasses((prev) => prev.filter((c) => c.grade !== null));
		} else {
			setClasses(classList);
		}
	}, [omitNoGrade]);

	const changeToInput = (index: number) => {
		classList[index].isEditable = true;
		setClasses(classList);
	};

	const changeToTableData = (index: number) => {
		classList[index].isEditable = false;
		setClasses(classList);
	};

	return (
		<>
			<div className="table-container">
				<table>
					<thead>
						<tr>
							<th>Block</th>
							<th>Class</th>
							<th>Grade</th>
						</tr>
					</thead>
					<tbody>
						{classes.map((c, index) => (
							<>
								<tr>
									<td>{c.block}</td>
									<td>
										{c.ap ? "AP " : ""}
										{c.name}
										{c.honors ? " Honors" : ""}
									</td>
									<td onClick={() => changeToInput(index)}>
										{c.isEditable ? (
											<input type="number" value={c.grade ?? 0} />
										) : (
											<span>
												{c.grade ?? "N/A"}
												{!!c.grade && "%"}
											</span>
										)}
									</td>
								</tr>
							</>
						))}
					</tbody>
				</table>
			</div>
			<div className="average-grade-container">
				<h2>Average Grade:</h2>
				<h3>{average(_.compact(grades))}%</h3>
			</div>
			<div className="options">
				<label htmlFor="omitGrades">Show Classes Without Grades</label>
				<input
					type="checkbox"
					id="omitGrades"
					onChange={() => setOmitNoGrade((prev) => !prev)}
					checked={omitNoGrade}
				/>
			</div>
		</>
	);
}

export default App;
