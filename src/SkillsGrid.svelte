<script>
    import { fade, fly } from "svelte/transition";
    import { darkMode } from "../stores/stateStore";
    import { Badge } from "sveltestrap";
    import { onMount } from "svelte";

    let showLoader = true;

    const sections = [
        {
            title: "Développement Web",
            description:
                "Je conçois des applications web robustes en JavaScript Vanilla ou à l’aide de frameworks modernes comme Svelte, React ou Node.js. J’accorde une grande importance à la qualité du code, à la performance et à la maintenabilité.",
            keywords: [
                "Svelte",
                "React",
                "Node.js",
                "JavaScript",
                "TypeScript",
                "API",
                "SPA",
            ],
        },
        {
            title: "Intégration Responsive",
            description:
                "Je réalise des interfaces adaptatives et esthétiques, en assurant une compatibilité parfaite sur mobiles, tablettes et desktops. Grâce à CSS moderne, Flexbox, Grid, Bootstrap et autres outils, je m'assure que l'expérience utilisateur est optimale.",
            keywords: [
                "HTML5",
                "CSS3",
                "Bootstrap",
                "Flexbox",
                "Grid",
                "Mobile First",
                "UX/UI",
            ],
        },
        {
            title: "Algorithmique & Logique",
            description:
                "J’ai une solide base en algorithmique, ce qui me permet de résoudre efficacement des problèmes complexes, d’optimiser les performances et d’aborder des domaines comme les structures de données, la récursivité ou la manipulation d’arbres.",
            keywords: [
                "Python",
                "C",
                "Shell",
                "Structures de données",
                "Optimisation",
                "Récursivité",
            ],
        },
    ];

    onMount(() => {
        // Après 2.5s on cache les boules et on affiche les cards
        const timeout = setTimeout(() => {
            showLoader = false;
        }, 4200);

        return () => clearTimeout(timeout);
    });
</script>

{#if showLoader}
        <div class="loader-container">
            <div class="loader-ball" style="animation-delay: 0s"></div>
            <div class="loader-ball" style="animation-delay: 0.3s"></div>
            <div class="loader-ball" style="animation-delay: 0.6s"></div>
        </div>
{:else}
    <div class="skills-presentation">
        {#each sections as section, index}
            <div
                class="section-card"
                in:fly={{ y: 40, duration: 500, delay: index * 200 }}
            >
                <h2 style={$darkMode ? "color: white" : "color: grey"}>
                    {section.title}
                </h2>
                <p
                    style={$darkMode
                        ? "color: #b3b0b0; padding: 2vh 0 2vh;"
                        : "color: grey; padding: 2vh 0 2vh;"}
                >
                    {section.description}
                </p>
                <div class="keywords">
                    {#each section.keywords as key}
                        <div
                            style="border: solid red 0vh;"
                            in:fly={{ y: 40, duration: 50, delay: index * 10 }}
                        >
                            <Badge
                                color={$darkMode ? "dark" : "secondary"}
                                style="padding: 1vh; padding: 0.4rem 0.8rem; font-size: 0.85rem;"
                                >{key}</Badge
                            >
                        </div>
                    {/each}
                </div>
            </div>
        {/each}
    </div>
{/if}

<style>
    .loader-container {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 2.5rem;
        animation: loading 3.7s ease-in-out forwards;
    }
    @keyframes loading {
        0% {
            margin-top: -80vh;
            overflow-y: hidden;
        }
        30% {
            margin-top: 10vh;
            overflow-y: hidden !important;
        }
        70% {
            margin-top: -10vh;
            overflow: hidden !important;
        }
        100% {
            margin-top: 110vh;
            overflow: hidden !important;
        }
    }

    .loader-ball {
        width: 8vh;
        height: 8vh;
        background-color: #c5bdbdd2;
        border-radius: 50%;
        animation: bounce 1.2s infinite ease-in-out;
    }

    @keyframes bounce {
        0%,
        100% {
            transform: translateY(0);
            opacity: 0.6;
        }
        50% {
            transform: translateY(-20px);
            opacity: 1;
        }
    }

    .skills-presentation {
        padding: 4vh 2vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 4vh;
        background-color: inherit;
        color: grey;
        animation: skillsAnim linear 0s forwards;
    }

    @keyframes skillsAnim {
        0% {
            margin-top: -80vh;
        }
        100% {
            margin-top: 0vh;
        }
    }

    .section-card {
        max-width: 80vw;
        background: #ffffff1a;
        border-radius: 1.5rem;
        padding: 3vh 3vw;
        box-shadow: 0 8px 24px #0000001a;
        backdrop-filter: blur(10px);
        border: 1px solid #c8c8c833;
        transition: transform 0.3s ease;
        animation: sectionAnim ease-in-out 1.2s forwards;
    }

    @keyframes sectionAnim {
        0% {
            opacity: 0.1;
        }
        100% {
            opacity: 1;
        }
    }

    .section-card:hover {
        transform: translateY(-5px);
    }

    h2 {
        font-size: 1.8rem;
        margin-bottom: 1vh;
        color: #635c5c;
    }

    p {
        font-size: 1.1rem;
        line-height: 1.6;
        margin-bottom: 2vh;
    }

    .keywords {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
    }

    @media (max-width: 768px) {
        .section-card {
            padding: 2vh 5vw;
        }

        h2 {
            font-size: 1.4rem;
        }

        p {
            font-size: 1rem;
        }
    }
</style>
