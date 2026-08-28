import ScheduleCard from "../ScheduleCard";
import "./SectionTwo.css";
import schedule from "../../utils/schedule";
import { useState } from "react";

const data = schedule.days;

export default function SectionTwo() {
	const [activeDay, setActiveDay] = useState(0);

	return (
		<div id="schedules" className="section_2">
			<div className="sectionContainer container">
				<div className=" schedule__header">
					<div>
						<p className="schedule__tag">Cronograma completo</p>
						<p className="schedule__title">
							Do encontro à ação, em dois dias de trocas.
						</p>
					</div>
					<span>
						Intervalo para almoço das 12h30 às 14h. A programação pode receber
						pequenos ajustes.
					</span>
				</div>
				<div className="schedule__mobile-toggle">
					{data.map((_, index) => (
						<button
							key={index}
							className={`schedule__toggle-btn ${activeDay === index ? "is-active" : ""}`}
							onClick={() => setActiveDay(index)}
						>
							Dia {index + 1}
						</button>
					))}
				</div>
				<div className="schedule__cards">
					{data.map((day, index) => (
						<div
							key={index}
							className={`schedule__card-wrapper ${activeDay === index ? "is-active" : ""}`}
						>
							<ScheduleCard
								activities={day.activities}
								date={day.date.split("/")[0]}
								day={`${index + 1}`}
								full_date={day.full_date}
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
