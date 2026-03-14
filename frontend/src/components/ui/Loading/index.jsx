import "./loading.styles.css";

function Loading({ text = "Carregando..." }) {
	return (
		<div className="loading-container">
			<div className="spinner"></div>
			<p>{text}</p>
		</div>
	);
}

export default Loading;
