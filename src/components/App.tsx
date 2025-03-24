import React, { useEffect, useState } from "react";

import _ from "lodash";

import "../scss/App.scss";

function App() {
	var classList = [
		{
			block: 1,
			name: "Marine Science",
			honors: false,
			ap: false,
			grade: 90.16,
		},
		{
			block: 2,
			name: "English III",
			honors: false,
			ap: false,
			grade: 97.58,
		},
		{
			block: 3,
			name: "Apologetics",
			honors: false,
			ap: false,
			grade: 91.01,
		},
		{
			block: 4,
			name: "Spanish II",
			honors: true,
			ap: false,
			grade: 84.87,
		},
		{
			block: 5,
			name: "Geometry",
			honors: false,
			ap: false,
			grade: 90.72,
		},
		{
			block: 6,
			name: "Study Hall",
			honors: false,
			ap: false,
			grade: null,
		},
		{
			block: 7,
			name: "Computer Science Essentials",
			honors: true,
			ap: false,
			grade: 90.66,
		},
		{
			block: 8,
			name: "US History",
			honors: false,
			ap: false,
			grade: 94.48,
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

	const changeToInput = (e) => {};

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
									<td>{c.name}</td>
									<td>
										{c.grade ?? "N/A"}
										{!!c.grade && "%"}
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
