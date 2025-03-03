import { useState } from "react";

import _ from "lodash";

import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import "../scss/App.scss";

function App() {
	const [count, setCount] = useState(0);
	const [classList, setClassList] = useState([
		{
			block: 1,
			name: "Marine Science",
			honors: false,
			ap: false,
		},
		{
			block: 2,
			name: "English III",
			honors: false,
			ap: false,
		},
		{
			block: 3,
			name: "Apologetics",
			honors: false,
			ap: false,
		},
		{
			block: 4,
			name: "Spanish II",
			honors: true,
			ap: false,
		},
		{
			block: 5,
			name: "Geometry",
			honors: false,
			ap: false,
		},
		{
			block: 6,
			name: "Study Hall",
			honors: false,
			ap: false,
		},
		{
			block: 7,
			name: "Computer Science Essentials",
			honors: true,
			ap: false,
		},
		{
			block: 8,
			name: "US History",
			honors: false,
			ap: false,
		},
	]);

	const [grades, setGrades] = useState([
		90.16,
		96.83,
		91.01,
		84.87,
		90.72,
		null,
		91.53,
		94.48,
	]);

	const [showNoGradeClasses, setShowNoGradeClasses] = useState(true);

	const average = (list, decimal) => {
		parseFloat(
			(list.reduce((a, b) => a + b) / list.length).toFixed(
				decimal ? decimal : 2
			)
		);
	};

	const [gradeAverage, setAverage] = useState(average(_.compact(grades), 2));

	return (
		<>
			<label for="no-grade-classes">Show Classes Without Grades</label>
			<input
				id="no-grade-classes"
				type="checkbox"
				checked={showNoGradeClasses}
				onChange={() => setShowNoGradeClasses((prev) => !prev)}
			/>
			<table>
				<tr>
					<th>Class Name</th>
					<th>Grade</th>
				</tr>
				{classList.map((course, index) => (
					<>
						<tr>
							<td>{course.name}</td>
							<td
								onClick={() => {
									const newGrade = prompt(
										"Enter a new grade for " + course.name
									);
									if (newGrade !== null) {
										const courseIndex = classList.findIndex(
											(c) => c.name === course.name
										);
										const updatedGrades = [...grades];
										updatedGrades[courseIndex] = parseFloat(newGrade);
										setGrades(updatedGrades);
									}
								}}>
								{!!grades[index] ? `${grades[index]}%` : "N/A"}
							</td>
						</tr>
					</>
				))}
			</table>
		</>
	);
}

export default App;
