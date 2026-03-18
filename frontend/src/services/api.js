const API_URL = "https://agendapro-9rwh.onrender.com";

export async function apiFetch(endpoint, options = {}) {
	const token = localStorage.getItem("token");

	const response = await fetch(`${API_URL}${endpoint}`, {
		...options,
		headers: {
			"Content-Type": "application/json",
			...(token && { Authorization: `Bearer ${token}` }),
			...options.headers,
		},
		...(options.body && { body: options.body }),
	});

	let data;

	try {
		data = await response.json();
	} catch {
		data = {};
	}

	if (response.status === 401) {
		localStorage.removeItem("token");
		localStorage.removeItem("user");
		window.location.href = "/login";
		throw new Error("Sessão expirada");
	}

	if (!response.ok) {
		throw new Error(data?.detail || data?.message || "Erro na requisição");
	}

	return data;
}
