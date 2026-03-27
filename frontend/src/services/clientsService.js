import { supabase } from "../lib/supabaseClient";

export async function getClients() {
	return supabase
		.from("clientes")
		.select("*")
		.then(({ data, error }) => {
			if (error) {
				console.error(`Erro ao buscar clientes ${error.message}`);
				return [];
			}

			return data;
		});
}

export async function createClient(client) {
	return supabase
		.from("clientes")
		.insert([client])
		.then(({ data, error }) => {
			if (error) {
				console.error(`Erro ao criar novo clientes ${error.message}`);
				return null;
			}

			return data;
		});
}

export async function getSelectedClient(id) {
	return supabase
		.from("clientes")
		.select("*")
		.eq("id", id)
		.single()
		.then(({ data, error }) => {
			if (error) {
				console.error(`Erro ao buscar o cliente ${error.message}`);
				return null;
			}
			return data;
		});
}

export async function updateClients(id, novosDados) {
	return supabase
		.from("clientes")
		.update(novosDados)
		.eq("id", id)
		.then(({ data, error }) => {
			if (error) {
				console.error(`Não foi possível atualizar o projeto  ${error}`);
			}
			return data;
		});
}

export async function deleteClient() {}
