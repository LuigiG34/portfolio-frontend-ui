export async function loginUser(username: string, password: string): Promise<string> {
    const response = await fetch("http://localhost:8080/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
        throw new Error("Identifiants invalides. Veuillez réessayer.");
    }

    const { token } = await response.json();
    return token;
}