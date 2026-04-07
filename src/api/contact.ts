const API_URL = import.meta.env.VITE_API_URL;

export async function createContact(name: string, email: string, message: string) {
    const response = await fetch(`${API_URL}/api/contacts`, {
        method: "POST",
        headers: { "Content-Type": "application/ld+json" },
        body: JSON.stringify({ name, email, message }),
    });

    if (response.status === 400) throw new Error("Données invalides.");
    if (response.status === 422) throw new Error("Une erreur est survenue.");
    if (!response.ok) throw new Error("Erreur inattendue.");

    return response.json();
}