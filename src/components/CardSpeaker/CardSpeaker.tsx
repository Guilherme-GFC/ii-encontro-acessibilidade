import "./CardSpeaker.css";

interface Props {
	name: string;
	description: string;
	photo: string;
}

export default function CardSpeaker({ name, description, photo }: Props) {
	return (
		<div className="card_speaker">
			<h3 className="speaker_name">{name}</h3>
			<img src={photo} className="speaker_img" />
			<p className="speaker_description">{description}</p>
		</div>
	);
}
