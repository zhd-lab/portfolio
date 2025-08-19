<script>
    export let code = 404; // Par défaut, erreur 404

    let message = "La page que vous recherchez n'existe pas.";
    if (code === 403) {
        message = "Vous n'avez pas l'autorisation d'accéder à cette page.";
    }
</script>

<main class="error-container">
    <h1>{code}</h1>
    <p>{message}</p>
    <a href="/" class="home-button">Retour à l'accueil</a>
</main>

<style>
    .error-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
        text-align: center;
        background-color: #f8f9fa;
        color: #333;
    }

    h1 {
        font-size: 5rem;
        margin: 0;
        color: #d9534f;
    }

    p {
        font-size: 1.5rem;
        margin: 1rem 0;
    }

    .home-button {
        padding: 0.8rem 1.5rem;
        font-size: 1.2rem;
        font-weight: bold;
        color: white;
        background-color: #007bff;
        text-decoration: none;
        border-radius: 5px;
        transition: background-color 0.3s ease-in-out;
    }

    .home-button:hover {
        background-color: #0056b3;
    }
</style>
