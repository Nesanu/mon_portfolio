const BASE_URL = "https://api.github.com";
const githubUsername = import.meta.env.VITE_GITHUB_USERNAME;

/**
 * Fonction utilitaire pour effectuer un appel GET générique
 * @param {string} endpoint - L'endpoint de l'API (par exemple, '/TonyLaPoche/repos')
 * @returns {Promise<{status: number, data: any, message?: string}>} - La réponse JSON si la requête réussit ou un objet avec un message d'erreur
 */
async function fetchFromGitHub(endpoint) {
    try {
        const response = await fetch(`${BASE_URL}${endpoint}`);

        // Si la limite de requêtes est atteinte
        if (response.status === 403) {
            const resetTime = response.headers.get("X-RateLimit-Reset");
            const retryAfterSeconds = resetTime
                ? Math.ceil((resetTime * 1000 - Date.now()) / 1000) // Calculer les secondes restantes
                : 60 * 60; // Valeur par défaut si aucune info (1 heure)

            return {
                status: 403,
                data: null,
                message: `La limite de requêtes a été atteinte! Réessayez dans ${retryAfterSeconds} secondes.`,
                retryAfter: retryAfterSeconds,
            };
        }

        if (!response.ok) {
            throw new Error(`GitHub API error : ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        return { status: response.status, data };
    } catch (error) {
        console.error("Erreur lors de l'appel à l'API GitHub :", error);
        return {
            status: 500, // Code erreur serveur
            data: null,
            message: "Une erreur est survenue lors de l'appel à l'API GitHub.",
        };
    }
}

/**
 * Récupérer tous les repositories publics d'un utilisateur
 * @returns {Promise<{status: number, data: any, message?: string}>}
 */
export async function getUserRepos() {
    return fetchFromGitHub(`/users/${githubUsername}/repos`);
}

/**
 * Récupérer les détails d'un repository spécifique
 * @param {string} repoName - Le nom du repository
 * @returns {Promise<{status: number, data: any, message?: string}>}
 */
export async function getRepoDetails(repoName) {
    return fetchFromGitHub(`/repos/${githubUsername}/${repoName}`);
}

export default {
    getUserRepos,
    getRepoDetails,
};