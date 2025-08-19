<script>
    import { onMount } from "svelte";
    import { writable } from "svelte/store";

    // Clé API OMDb
    const API_KEY = "47811044";
    const API_URL = "https://www.omdbapi.com/";

    // Store pour stocker les films récupérés
    const movies = writable([]);
    let searchQuery = "batman"; // Film par défaut

    const fetchMovies = async (query) => {
        try {
            const res = await fetch(`${API_URL}?s=${query}&apikey=${API_KEY}`);
            const data = await res.json();

            if (data.Search) {
                movies.set(data.Search);
            } else {
                movies.set([]); // Aucun résultat
            }
        } catch (error) {
            console.error("Erreur de récupération des films :", error);
        }
    };

    // Chargement initial des films
    onMount(() => {
        fetchMovies(searchQuery);
    });

    // Fonction pour rechercher un film
    const searchMovies = () => {
        fetchMovies(searchQuery);
    };
</script>

<div class="container">
    <h2>🎥 Rechercher un film</h2>
    <input
        type="text"
        bind:value={searchQuery}
        placeholder="Entrez un titre..."
    />
    <button on:click={searchMovies}>🔍 Rechercher</button>

    <div class="grid">
        {#each $movies as movie}
            <div class="movie-card">
                <img
                    src={movie.Poster !== "N/A"
                        ? movie.Poster
                        : "https://via.placeholder.com/200"}
                    alt={movie.Title}
                />
                <h3>{movie.Title}</h3>
                <p>📅 {movie.Year}</p>
            </div>
        {/each}
    </div>
</div>

<style>
    .container {
        text-align: center;
        padding: 20px;
    }
    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 16px;
        padding: 20px;
    }
    .movie-card {
        background: #fff;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        padding: 10px;
        text-align: center;
    }
    img {
        max-width: 100%;
        border-radius: 8px;
    }
    input,
    button {
        padding: 8px;
        margin: 5px;
        font-size: 16px;
    }
</style>
