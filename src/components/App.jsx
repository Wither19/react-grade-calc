import { useState } from "react";

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
			grade: 96.83,
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
			grade: 91.53,
		},
		{
			block: 8,
			name: "US History",
			honors: false,
			ap: false,
			grade: 94.48,
		},
	];

	const [classes, setClasses] = useState(classList);

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
				{classList && gradeList
					? classList.map((course, index) => (
							<>
								<tr>
									<td>{course.name}</td>
									<td>{!!gradeList[index] ? `${gradeList[index]}%` : "N/A"}</td>
								</tr>
							</>
					  ))
					: null}
			</table>
		</>
	);
}

export default App;
