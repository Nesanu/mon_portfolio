import { useState } from "react";
import styles from "./Contact.module.scss";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Remplacez ce code par l'intégration avec emailJS plus tard
        console.log("Form Data Submitted:", formData);
        setIsSubmitted(true);
        // Réinitialiser le formulaire après envoi
        setFormData({
            name: "",
            email: "",
            message: "",
        });
    };

    return (
        <section className={styles.contact}>
            <h2 className={styles.title}>Contactez-moi</h2>
            <p className={styles.description}>
                Vous avez une question ou souhaitez échanger ? Remplissez le formulaire ci-dessous.
            </p>
            {!isSubmitted ? (
                <form onSubmit={handleSubmit} className={styles.form}>
                    {/* Nom */}
                    <div className={styles.formGroup}>
                        <label htmlFor="name">Nom</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Votre nom"
                            required
                        />
                    </div>

                    {/* Email */}
                    <div className={styles.formGroup}>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Votre adresse email"
                            required
                        />
                    </div>

                    {/* Message */}
                    <div className={styles.formGroup}>
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Votre message ici"
                            required
                        ></textarea>
                    </div>

                    {/* Bouton d'envoi */}
                    <button type="submit" className={styles.submitButton}>
                        Envoyer
                    </button>
                </form>
            ) : (
                <p className={styles.thankYou}>
                    Merci ! Votre message a été envoyé avec succès.
                </p>
            )}
        </section>
    );
};

export default Contact;