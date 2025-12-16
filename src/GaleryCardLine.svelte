<script>
    import { onMount } from "svelte";
    import { Button, Badge } from "sveltestrap";

    const projects = [
        {
            title: "Visual-Flow — Outil d’analyse visuelle",
            desc: "Dashboard permettant aux utilisateurs de visualiser sa trace sur le web",
            tech: ["Svelte", "Sveltestrap", "Node.js"],
        },
        {
            title: "UE — Plateforme de chiffrement",
            desc: "Interface web permettant de lire et de chiffrer des données à partir d’une clé.",
            tech: ["Svelte", "Sveltestrap", "Firebase"],
        },
        {
            title: "Prysma — Dashboard temps réel",
            desc: "Web app analysant l’actualité de la presse en ligne au travers des 100 derniers articles parus.",
            tech: ["Svelte", "Sveltestrap", "TimescaleDB"],
        },
    ];

    let container;
    let visible = [false, false, false];

    onMount(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const cards = Array.from(
                            container.querySelectorAll(".card"),
                        );
                        cards.forEach((card, i) => {
                            setTimeout(
                                () => {
                                    visible[i] = true;
                                },
                                2200 + i * 200,
                            );
                        });
                        observer.disconnect();
                    }
                });
            },
            { threshold: 0.15 },
        );

        if (container) observer.observe(container);

        return () => observer.disconnect();
    });
</script>

<section bind:this={container} class="cards-wrap" aria-label="Projets fictifs">
    {#each projects as p, i}
        <article
            class="card {visible[i] ? 'visible' : ''}"
            role="article"
            aria-labelledby={`title-${i}`}
            style="--delay: {i * 150}ms"
        >
            <header class="card-head">
                <h3 id={`title-${i}`}>{p.title}</h3>
                <p class="card-desc">{p.desc}</p>
            </header>

            <div align="center">
                <ul class="tech-list">
                    {#each p.tech as t}
                        <Badge color="secondary" style="margin-left: 0.5vh;"
                            >{t}</Badge
                        >
                    {/each}
                </ul>
            </div>

            <div
                style="display: flex; justify-content: center; gap: 1rem; margin-top: 2vh;"
            >
                <a href={p.github} target="_blank" rel="noopener noreferrer">
                    <Button color="dark">GitHub</Button>
                </a>
                <a href={p.url} target="_blank" rel="noopener noreferrer">
                    <Button color="light">web</Button>
                </a>
            </div>
        </article>
    {/each}
</section>

<style>
    :global(:root) {
        --gap: 1rem;
        --radius: 14px;
        --card-text: #e6e7ec;
        --card-shadow: 0 8px 24px rgba(16, 24, 40, 0.18);
        --hover-shadow: 0 18px 40px rgba(16, 24, 40, 0.28);
    }

    /* Grille des cards */
    .cards-wrap {
        display: grid;
        gap: var(--gap);
        grid-template-columns: 1fr;
        padding: 1rem;
        max-width: 1200px;
        margin: 0 auto;
    }

    @media (min-width: 640px) {
        .cards-wrap {
            grid-template-columns: repeat(2, 1fr);
        }
    }
    @media (min-width: 1024px) {
        .cards-wrap {
            grid-template-columns: repeat(3, 1fr);
        }
    }

    .card {
        position: relative;
        overflow: hidden;
        text-align: center;
        border-radius: var(--radius);
        padding: 1.5rem;

        opacity: 0;
        transform: translateX(-18px) translateY(6px) scale(0.995);
        transition:
            opacity 520ms cubic-bezier(0.2, 0.9, 0.2, 1) var(--delay),
            transform 520ms cubic-bezier(0.2, 0.9, 0.2, 1) var(--delay),
            box-shadow 240ms ease;

        box-shadow: var(--card-shadow);
    }

    .card::before {
        content: "";
        position: absolute;
        inset: 0;
        z-index: -1;
        border-radius: inherit;

        background: linear-gradient(135deg, #363653dc, #262641dc);
        background-size: 300% 300%;
    }

    @keyframes bgFlow {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }

    .card.visible {
        opacity: 1;
        transform: translateX(0) translateY(0) scale(1);
    }

    .card:hover,
    .card:focus-within {
        transform: translateY(-6px) scale(1.015);
        box-shadow: var(--hover-shadow);
    }

    .card:hover::before {
        opacity: 1;
        filter: brightness(1.1);
        transition: filter 0.3s ease;
    }

    .card-head h3 {
        margin: 0 0 0.35rem;
        font-size: 1.05rem;
        color: var(--card-text);
    }
    .card-desc {
        margin-top: 3vh;
        color: #b8b9c6;
        font-size: 0.95rem;
        line-height: 1.35;
    }

    .tech-list {
        gap: 0.5rem;
        list-style: none;
        padding: 0;
        margin: 0;
        flex: 1;
        flex-wrap: wrap;
        display: flex;
        justify-content: center;
    }

    @media (max-width: 420px) {
        .card {
            padding: 1.1rem;
        }
        .card-head h3 {
            font-size: 1rem;
        }
    }
</style>
