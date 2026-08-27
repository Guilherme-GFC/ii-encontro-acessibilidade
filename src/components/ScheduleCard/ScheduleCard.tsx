import "./ScheduleCard.css";

interface Props {
	day: string;
	date: string;
	full_date: string;
	activities: (
		| {
				time: string;
				title: string;
				details?: undefined;
		  }
		| {
				time: string;
				title: string;
				details: string;
		  }
	)[];
}

export default function ScheduleCard({
	day,
	date,
	full_date,
	activities,
}: Props) {
	return (
		<div className="schedule__card">
			<div className="card__header">
				<div className="card__header__title">
					<p className="card__title__date">Dia {day}</p>
					<span className="card__title__fulldate">{full_date}</span>
				</div>
				<div className="card__header__date">{date}</div>
			</div>
			<div className="card__activities">
				{activities.map((act) => (
					<div className="activity">
						<p className="activity__hour">{act.time}</p>
						<div className="activity_description">
							<p className="description__title">{act.title}</p>

							{act.details ? (
								<p className="description__info">{act.details}</p>
							) : (
								<></>
							)}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
