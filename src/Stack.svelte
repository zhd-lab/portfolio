<script>
    import techsData from "./jsonData/stack.json";
    import { onMount } from "svelte";
    import { fly } from "svelte/transition";

    import { Card } from "sveltestrap";
    import Navbar from "./Navbar.svelte";
    import { darkMode } from "../stores/stateStore";

    // logos
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
    import img_ffmpeg from "./assets/icons/ffmpeg.png";
    import img_jwt from "./assets/icons/jsontoken.png";
    import img_json from "./assets/icons/json.png";
    import img_git from "./assets/icons/git.png";
    import img_csfml from "./assets/icons/csfml.png";
    import img_sveltekit from "./assets/icons/sveltekit.png";
    import img_tailwind from "./assets/icons/tailwind.png";
    import img_bulma from "./assets/icons/bulma.png";
    import img_sveltestrap from "./assets/icons/sveltestrap.png";
    import img_vite from "./assets/icons/vite.png";
    import img_leaflet from "./assets/icons/leaflet.png";

    import BirdAnim from "./BirdAnim.svelte";

    let showCards = false;

    let bgA = "none";
    let bgB = "none";
    let active = null;
    let swap = false;
    const TRANSITION_MS = 1200; // match css

    const skillIcons = {
        HTML: img_html,
        SvelteKit: img_sveltekit,
        Bulma: img_bulma,
        Tailwind: img_tailwind,
        Sveltestrap: img_sveltestrap,
        CSS: img_css,
        Csfml: img_vite,
        JavaScript: img_js,
        TypeScript: img_ts,
        React: img_react,
        Svelte: img_svelte,
        Python: img_py,
        Nodejs: img_nodejs,
        C: img_c,
        CSFML: img_csfml,
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
        techs = techsData.map((tech) => ({
            ...tech,
            logo: skillIcons[tech.logo],
        }));

        techs.forEach((t) => {
            const img = new Image();
            img.src = t.logo;
        });

        setTimeout(() => {
            showCards = true;
        }, 4000);
    });

    function handleEnter(logo) {
        if (!logo) return;

        if (!swap) {
            bgA = `url(${logo})`;
            active = "a";
        } else {
            bgB = `url(${logo})`;
            active = "b";
        }
        swap = !swap;
    }

    function handleLeave() {
        const prevActive = active;
        active = null;

        setTimeout(() => {
            if (prevActive === "a" && active !== "a") {
                bgA = "none";
            } else if (prevActive === "b" && active !== "b") {
                bgB = "none";
            }
        }, TRANSITION_MS + 50);
    }
</script>

<main class="main">
    <Card
        color={$darkMode ? "dark" : "secondary"}
        style="
            width: 98vw;
            height: 96vh;
            margin: 2vh;
            overflow-x: hidden;
            overflow-y: auto;
            background-color: {$darkMode ? '#121212' : '#ffffff'};
            color: {$darkMode ? '#ffffff' : '#000000'};
        "
    >
        <div class="navbar-wrapper">
            <Navbar />
        </div>

        {#if !showCards}
            <div class="stack-container">
                <BirdAnim />
            </div>
        {:else}
            <div
                class="
                    grid
                    {bgA !== 'none' || bgB !== 'none' ? 'has-bg' : ''}
                    {active === 'a' ? 'show-a' : active === 'b' ? 'show-b' : ''}
                "
                style="
                    --bg-a: {bgA};
                    --bg-b: {bgB};
                "
            >
                {#each techs as tech, i (tech.name)}
                    <div
                        class="tech-card"
                        on:mouseenter={() => handleEnter(tech.logo)}
                        on:mouseleave={() => handleLeave()}
                        in:fly={{
                            y: 40,
                            opacity: 0,
                            duration: 500,
                            delay: 80 * i,
                        }}
                    >
                        <img src={tech.logo} alt={tech.name} />

                        <h4
                            class="tech-title"
                            style="color: {$darkMode
                                ? '#ffffffc5'
                                : '#000000'};"
                        >
                            {tech.name}
                        </h4>

                        <p
                            class="desc"
                            style="color: {$darkMode
                                ? '#b1adad'
                                : '#ffffff96'};"
                        >
                            {tech.description}
                        </p>
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

    .stack-container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: calc(96vh - 64px);
        width: 100%;
    }

    .grid {
        position: relative;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 2rem;
        padding: 2rem;
        overflow: auto;
    }
    .grid::before,
    .grid::after {
        content: "";
        position: absolute;
        inset: 0;
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        z-index: 0;
        pointer-events: none;
        transition:
            opacity 1200ms ease,
            filter 1200ms ease;
        opacity: 0;
        filter: blur(0);
    }

    .grid::before {
        background-image: var(--bg-a);
    }
    .grid::after {
        background-image: var(--bg-b);
    }

    .grid.has-bg::before,
    .grid.has-bg::after {
        opacity: 0;
        filter: blur(0);
    }

    .grid.show-a.has-bg::before {
        opacity: 0.42;
        filter: blur(2vh);
    }
    .grid.show-a.has-bg::after {
        opacity: 0;
    }

    .grid.show-b.has-bg::after {
        opacity: 0.42;
        filter: blur(2vh);
    }
    .grid.show-b.has-bg::before {
        opacity: 0;
    }

    .grid > * {
        position: relative;
        z-index: 1;
    }

    .tech-card {
        text-align: center;
        padding: 1rem;
        border-radius: 12px;
        background: inherit;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease;
        animation: techAnim 0.8s ease-in-out forwards;
    }

    @keyframes techAnim {
        0% {
            transform: translateX(-1vh);
        }
        100% {
            transform: translateX(0);
        }
    }

    .tech-card:hover {
        animation: cardHoverSmooth 0.35s ease-out forwards;
    }

    @keyframes cardHoverSmooth {
        0% {
            transform: scale(1);
            background-color: #ffffff00;
        }
        60% {
            transform: scale(1.035);
            background-color: #ffffff1a;
        }
        100% {
            transform: scale(1.03);
            background-color: #ffffff3f;
        }
    }

    /* Wiggle on hover */
    .tech-card:hover img {
        animation: wiggle 0.6s ease-in-out;
    }

    @keyframes wiggle {
        0% {
            transform: rotate(0);
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
            transform: rotate(0);
        }
    }

    .tech-card img {
        width: 4rem;
        height: 4rem;
        object-fit: cover;
        margin-bottom: 1rem;
    }

    .tech-title {
        margin: 0.5rem 0;
    }

    /* Scrollbars */
    .main::-webkit-scrollbar {
        width: 12px;
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
