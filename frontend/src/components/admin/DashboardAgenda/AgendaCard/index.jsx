import { useState } from "react";
import AgendaModal from "../AgendaModal";

import "./agenda-card.styles.css";

function AgendaCard({ agenda }) {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleOpenModal = () => setIsModalOpen(true);
	const handleCloseModal = () => setIsModalOpen(false);

	return (
		<>
			<li className="agenda-item">
				<div className="agenda-hora">
					{agenda.inicio} - {agenda.fim}
				</div>

				<div className="agenda-info">
					<span className="agenda-nome">Aluno: {agenda.nomeAluno}</span>

					<span className="agenda-servico">Serviço: {agenda.servico}</span>

					<span className="agenda-personal">
						Personal: {agenda.nomePersonal}
					</span>

					<span className="agenda-data">Data: {agenda.data}</span>

					<span className={`agenda-status ${agenda.status}`}>{agenda.status}</span>
				</div>

				<div className="agenda-footer">
					<button type="button" onClick={handleOpenModal}>
						Editar
					</button>
				</div>
			</li>

			<AgendaModal
				agenda={agenda}
				isOpen={isModalOpen}
				onClose={handleCloseModal}
				onEdit={() => alert(`Editar ${agenda.nome}`)}
				onDelete={() => alert(`Deletar ${agenda.nome}`)}
			/>
		</>
	);
}

export default AgendaCard;
