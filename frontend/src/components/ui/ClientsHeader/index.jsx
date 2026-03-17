import "./clients-header.styles.css";

function ClientsHeader({ titulo, btn, onClick }) {
	return (
		<div className="clients-header">
			<h1>{titulo}</h1>
			<button onClick={onClick}>
				<span>+</span> {btn}
			</button>
		</div>
	);
}

export default ClientsHeader;
