import emailjs from "@emailjs/browser";

// Charger les clés et les identifiants depuis les variables d'environnement
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;

/**
 * Service pour envoyer des emails en utilisant l'API EmailJS.
 */
const EmailJsService = {
    /**
     * Envoyer un email via EmailJS
     * @param {Object} templateParams - Les paramètres nécessaires pour le template EmailJS
     * @returns {Promise<{status: string, message: string}>} - Résultat de l'envoi (success ou error)
     */
    async sendEmail(templateParams) {
        try {
            const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);

            // Vérifier la réponse
            if (response.status === 200) {
                console.log("Email envoyé avec succès :", response);
                return { status: "success", message: "Email envoyé avec succès." };
            } else {
                console.error("Erreur lors de l'envoi de l'email :", response);
                return { status: "error", message: "Erreur lors de l'envoi de l'email." };
            }
        } catch (error) {
            console.error("Une erreur est survenue lors de l'envoi de l'email :", error);
            return { status: "error", message: "Une erreur est survenue lors de l'envoi de l'email." };
        }
    },
};

export default EmailJsService;