import "./dashboard-order.styles.css";

function DashboardOrder() {
	return (
		<div className="box">
			<h3>Lista de agendamentos</h3>
			<div className="box-content">
				<ul>
					<li>
						<h4>Cliente</h4>
						<p>teste</p>
					</li>
					<li>
						<h4>Data e horário</h4>
						<p>teste</p>
					</li>
					<li>
						<h4>Status</h4>
						<p>teste</p>
					</li>
					<li>
						<h4>Observações</h4>
						<p>teste</p>
					</li>
				</ul>
				<div className="box-content-btn">
					<button className="btn-confirm">confirmar</button>
					<button className="btn-remark">remarcar</button>
					<button className="btn-cancel">cancelar</button>
				</div>
			</div>
		</div>
	);
}

export default DashboardOrder;
