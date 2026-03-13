import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	Tooltip,
	CartesianGrid,
	ResponsiveContainer,
} from "recharts";

import "./dashboard-reports.styles.css";

function DashboardReports() {
	const atividades = [
		"João realizou treino funcional",
		"Maria renovou o plano Premium",
		"Carlos agendou treino às 14:00",
		"Novo aluno cadastrado",
	];
	const receitaMensal = [
		{ mes: "Jan", receita: 8000 },
		{ mes: "Fev", receita: 9200 },
		{ mes: "Mar", receita: 7000 },
		{ mes: "Abr", receita: 11200 },
		{ mes: "Mai", receita: 12500 },
		{ mes: "Jun", receita: 15200 },
	];

	const novosAlunos = [
		{ mes: "Jan", alunos: 5 },
		{ mes: "Fev", alunos: 8 },
		{ mes: "Mar", alunos: 6 },
		{ mes: "Abr", alunos: 10 },
		{ mes: "Mai", alunos: 12 },
		{ mes: "Jun", alunos: 15 },
	];

	return (
		<div className="dashboard-reports">
			<h1>Relatórios</h1>

			<div className="metrics">
				<div className="metric-card">
					<h3>Clientes Ativos</h3>
					<p>120</p>
				</div>

				<div className="metric-card">
					<h3>Treinos Realizados</h3>
					<p>350</p>
				</div>

				<div className="metric-card">
					<h3>Receita Total</h3>
					<p>R$ 15.200</p>
				</div>

				<div className="metric-card">
					<h3>Agendamentos Hoje</h3>
					<p>18</p>
				</div>
			</div>

			<div className="charts">
				<div className="chart">
					<h3>Receita Mensal</h3>
					<ResponsiveContainer width="100%" height={250}>
						<LineChart data={receitaMensal}>
							<CartesianGrid strokeDasharray="3 3" />
							<XAxis dataKey="mes" />
							<YAxis />
							<Tooltip />
							<Line
								type="monotone"
								dataKey="receita"
								stroke="#3b82f6"
								strokeWidth={3}
							/>
						</LineChart>
					</ResponsiveContainer>
				</div>

				<div className="chart">
					<h3>Novos Alunos</h3>
					<ResponsiveContainer width="100%" height={250}>
						<LineChart data={novosAlunos}>
							<CartesianGrid strokeDasharray="3 3" />
							<XAxis dataKey="mes" />
							<YAxis />
							<Tooltip />
							<Line
								type="monotone"
								dataKey="alunos"
								stroke="#22c55e"
								strokeWidth={3}
							/>
						</LineChart>
					</ResponsiveContainer>
				</div>
			</div>

			<div className="recent-activity">
				<h3>Atividade recente</h3>

				<ul>
					{atividades.map((a, i) => (
						<li key={i}>{a}</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default DashboardReports;
