<script>
    import techsData from "./jsonData/stack.json";
    import { onMount } from "svelte";
    import { fly } from "svelte/transition";

    import { Card } from "sveltestrap";
    import Navbar from "./Navbar.svelte";
    import { darkMode } from "../stores/stateStore";

    // Importation des logos
    import img_c from "./assets/icons/c.png";
    import img_html from "./assets/icons/html.png";
    import img_nodejs from "./assets/icons/nodejs.png";
    import img_css from "./assets/icons/css.png";
    import img_js from "./assets/icons/js.png";
    import img_ts from "./assets/icons/ts.png";
    import img_react from "./assets/icons/react.png";
    import img_py from "./assets/icons/python.png";
    import img_bootstrap from "./assets/icons/bootstrap.png";
    import img_svelte from "./assets/icons/svelte.png";
    import img_shell from "./assets/icons/shell.png";
    import img_ffmpeg from "./assets/icons/shell.png";
    import img_jwt from "./assets/icons/shell.png";
    import img_json from "./assets/icons/shell.png";
    import img_git from "./assets/icons/shell.png";
    import img_leaflet from "./assets/icons/shell.png";
    import img_vite from "./assets/icons/shell.png";

    import BirdAnim from "./BirdAnim.svelte";

    let showCards = false;

    const skillIcons = {
        HTML: img_html,
        CSS: img_css,
        JavaScript: img_js,
        TypeScript: img_ts,
        React: img_react,
        Svelte: img_svelte,
        Python: img_py,
        Nodejs: img_nodejs,
        C: img_c,
        Shell: img_shell,
        Bootstrap: img_bootstrap,
        FFmpeg: img_ffmpeg,
        JSONWebToken: img_jwt,
        JSON: img_json,
        Git: img_git,
        Leaflet: img_leaflet,
        Vite: img_vite,
    };

    let techs = [];

    onMount(() => {
        // Associe les logos aux objets importés
        techs = techsData.map((tech) => ({
            ...tech,
            logo: skillIcons[tech.logo],
        }));

        setTimeout(() => {
            showCards = true;
        }, 4000);
    });
</script>

<main class="main">
    <Card
        color={$darkMode ? "dark" : "light"}
        style="width: 96vw; height: 96vh; margin: 2vh; overflow-x: hidden; overflow-y: scroll; background-color: {$darkMode
            ? '#121212'
            : '#ffffff'}; color: {$darkMode ? '#ffffff' : '#000000'};"
    >
        <div class="navbar-wrapper">
            <Navbar />
        </div>

        {#if !showCards}
            <!-- Affichage du premier logo uniquement -->
            <div class="stack-container">
                <BirdAnim />
            </div>
        {:else}
            <!-- Affichage en grille animée -->
            <div class="grid">
                {#each techs as tech, i (tech.name)}
                    <div
                        style="background-color: inherit;"
                        class="tech-card"
                        in:fly={{
                            y: 40,
                            opacity: 0,
                            duration: 500,
                            delay: 80 * i,
                        }}
                    >
                        <img src={tech.logo} alt={tech.name} />
                        <h4 style="color: grey;">{tech.name}</h4>
                        <p class="desc">{tech.description}</p>
                    </div>
                {/each}
            </div>
        {/if}
    </Card>
</main>

<style>
    .desc {
        animation: descAnim 1.5s ease-in-out forwards;
    }
    @keyframes descAnim {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    .navbar-wrapper {
        position: sticky;
        top: 0;
        z-index: 10;
        background-color: inherit;
        padding: 2vh;
        backdrop-filter: blur(10px);
    }

    /* Animation initiale */
    .stack-container {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        height: calc(96vh - 64px); /* hauteur calculée en fonction de la Card */
        width: 100%;
    }

    @keyframes loading {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    /* Grille de présentation */
    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 2rem;
        padding: 2rem;
    }

    .tech-card {
        text-align: center;
        padding: 1rem;
        border-radius: 12px;
        background: #f9f9f9;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease;
        animation: techAnim 0.8s ease-in-out forwards;
    }
    @keyframes techAnim {
        0% {
            transform: translateX(-1vh);
        }
        100% {
            transform: translateX(0vh);
        }
    }

    @keyframes wiggle {
        0% {
            transform: rotate(0deg);
        }
        25% {
            transform: rotate(-10deg);
        }
        50% {
            transform: rotate(10deg);
        }
        75% {
            transform: rotate(-5deg);
        }
        100% {
            transform: rotate(0deg);
        }
    }

    /* Application de l'animation au survol de la carte */
    .tech-card:hover img {
        animation: wiggle 0.6s ease-in-out;
    }

    .tech-card img {
        aspect-ratio: 1 / 1;
        object-fit: cover;
        width: 4rem;
        height: 4rem;
        margin-bottom: 1rem;
    }

    .tech-card h4 {
        margin: 0.5rem 0;
    }

    .tech-card p {
        font-size: 0.9rem;
        color: #555;
    }

    /* Scrollbars */
    .main::-webkit-scrollbar {
        width: 12px;
    }

    .main::-webkit-scrollbar-track {
        background: transparent;
    }

    .main::-webkit-scrollbar-thumb {
        background-color: #888;
        border-radius: 6px;
        border: 3px solid transparent;
        background-clip: content-box;
    }

    .main::-webkit-scrollbar-thumb:hover {
        background-color: #555;
    }

    .main {
        scrollbar-width: thin;
        scrollbar-color: #888 transparent;
    }
</style>
