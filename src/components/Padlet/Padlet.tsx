import "./Padlet.css";

export default function Padlet() {
	return (
		<div className="padlet-embed padlet">
			<p>
				<iframe
					src="https://padlet.com/embed/s023km798f9jji055b5b"
					frameBorder="0"
					allow="camera;microphone;geolocation;display-capture;clipboard-write"
				/>
			</p>
		</div>
	);
}
