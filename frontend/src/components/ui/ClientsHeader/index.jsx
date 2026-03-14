import "./clients-header.styles.css";

function ClientsHeader({ titulo, btn }) {
	return (
		<div className="clients-header">
			<h1>{titulo}</h1>
			<button>
				<span>+</span> {btn}
			</button>
		</div>
	);
}

export default ClientsHeader;
