import ScheduleCard from "../ScheduleCard";
import "./SectionTwo.css";
import schedule from "../../utils/schedule";

const data = schedule.days;

export default function SectionTwo() {
	return (
		<div className="section_2">
			<div className="sectionContainer">
				<div className="container schedule__header">
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
				<div className="schedule__cards container">
					{data.map((day, index) => (
						<ScheduleCard
							activities={day.activities}
							date={day.date.split("/")[0]}
							day={`${index + 1}`}
							full_date={day.full_date}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
