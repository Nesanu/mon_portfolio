import {getRepoDetails} from "../../services/githubService.js";

export async function projetLoader({ params }) {
    const { id } = params;
    console.log(id)
    try {
        // Exemple : Récupérer les détails d'un repository Github
        const repo = await getRepoDetails(id);

        if (!repo) {
            throw new Response("Le projet demandé n'existe pas.", { status: 404 });
        }

        return repo;
    } catch (error) {
        throw new Response("Une erreur s'est produite lors de la recherche du projet.", { status: 500 });
    }

}

export default projetLoader;
