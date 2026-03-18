import { apiFetch } from "./api";

export async function register(nome, email, senha) {
	return await apiFetch("/auth/register", {
		method: "POST",
		body: JSON.stringify({ nome, email, senha }),
	});
}

export function isAuthenticated() {
	return !!localStorage.getItem("token");
}

export function getUser() {
	try {
		const user = localStorage.getItem("user");
		return user ? JSON.parse(user) : null;
	} catch {
		return null;
	}
}

export function logout() {
	localStorage.removeItem("token");
	localStorage.removeItem("user");
}

export async function login(email, senha) {
	try {
		const data = await apiFetch("/auth/login", {
			method: "POST",
			body: JSON.stringify({ email, senha }),
		});

		localStorage.setItem("token", data.token);
		localStorage.setItem("user", JSON.stringify(data.user));

		return data;
	} catch (error) {
		localStorage.removeItem("token");
		localStorage.removeItem("user");
		throw error;
	}
}
