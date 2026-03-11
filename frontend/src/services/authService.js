const API_URL = "https://agendapro-9rwh.onrender.com";

export async function register(email, senha) {
	const response = await fetch(`${API_URL}/auth/register`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ email, senha }),
	});

	const data = await response.json();

	if (!response.ok) {
		throw new Error(data.detail || "Erro no cadastro");
	}

	return data;
}

export async function login(email, senha) {
	const response = await fetch(`${API_URL}/auth/login`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ email, senha }),
	});

	let data;

	try {
		data = await response.json();
	} catch {
		data = {};
	}

	if (!response.ok) {
		throw new Error(data.detail || "Erro no login");
	}

	// salva no localStorage
	localStorage.setItem("auth", "true");
	localStorage.setItem("token", data.token);
	localStorage.setItem("user", JSON.stringify(data.user));

	return data;
}

export function logout() {
	localStorage.removeItem("auth");
	localStorage.removeItem("token");
	localStorage.removeItem("user");
}

export function getUser() {
	const user = localStorage.getItem("user");

	if (!user || user === "undefined") {
		return null;
	}

	return JSON.parse(user);
}

export function isAuthenticated() {
	return localStorage.getItem("auth") === "true";
}
