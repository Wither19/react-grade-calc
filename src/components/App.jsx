import { useEffect, useState } from "react";

import _ from "lodash";

import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
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

	const average = (list, decimal) => {
		parseFloat(
			(list.reduce((a, b) => a + b) / list.length).toFixed(
				decimal ? decimal : 2
			)
		);
	};

	const [classes, setClasses] = useState(classList);
	const [grades, setGrades] = useState(_.map(classes, (c) => c.grade));
	const [omitNoGrade, setOmitNoGrade] = useState(false);

	useEffect(() => {
		if (omitNoGrade) {
			setClasses(classes.filter((c) => c.grade !== null));
		} else {
			setClasses(classList);
		}
	}, [omitNoGrade]);

	const changeToInput = (e) => {};

	return (
		<>
<<<<<<< HEAD
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
				<h3>{_.compact(average(grades))}%</h3>
			</div>
			<div className="options">
				<label htmlFor="omitGrades">Show Classes Without Grades</label>
				<input
					type="checkbox"
					id="omitGrades"
					onChange={() => setOmitNoGrade((prev) => !prev)}
					value={omitNoGrade}
				/>
			</div>
=======
			<label htmlFor="no-grade-classes">Show Classes Without Grades</label>
			<input
				id="no-grade-classes"
				type="checkbox"
				checked={showNoGradeClasses}
				onChange={() => setShowNoGradeClasses((prev) => !prev)}
			/>
			<table>
				<thead>
					<tr>
						<th>Class Name</th>
						<th>Grade</th>
					</tr>
				</thead>
				<tbody>
					{classList.map((course, index) => (
						<>
							<tr>
								<td key={course.name}>{course.name}</td>
								<td key={`block-${course.id}`} onClick={changeToInput}>
									{!!grades[index] ? `${grades[index]}%` : "N/A"}
								</td>
							</tr>
						</>
					))}
				</tbody>
			</table>
>>>>>>> f56b033 (c)
		</>
	);
}

export default App;
