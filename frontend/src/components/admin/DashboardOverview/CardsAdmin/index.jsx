import "./cards-admin.styles.css";

function CardsAdmin() {
	return (
		<>
			<section className="overview">
				<div className="card">
					<div className="card-img">
						{/* <img src="" alt="" /> */}
					</div>
					<div className="card-content">
						<h4>5483</h4>
						<p>Cliente novos</p>
					</div>
				</div>

				<div className="card">
					<div className="card-img">
						{/* <img src="" alt="" /> */}
					</div>
					<div className="card-content">
						<h4>5483</h4>
						<p>Sessões pendentes</p>
					</div>
				</div>

				<div className="card">
					<div className="card-img">
						{/* <img src="" alt="" /> */}
					</div>
					<div className="card-content">
						<h4>5483</h4>
						<p>Avaliações recebidas</p>
					</div>
				</div>

				<div className="card warning">
					<div className="card-img">
						{/* <img src="" alt="" /> */}
					</div>
					<div className="card-content">
						<h4>5483</h4>
						<p>Total Products</p>
					</div>
				</div>
			</section>
		</>
	);
}

export default CardsAdmin;
