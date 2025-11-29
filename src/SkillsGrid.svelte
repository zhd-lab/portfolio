<script>
    import { fade, fly } from "svelte/transition";
    import { darkMode } from "../stores/stateStore";
    import { Badge } from "sveltestrap";
    import { onMount } from "svelte";

    let showLoader = true;
    let hoveredIndex = null;

    const sections = [
        {
            title: "Développement Web",
            color: "#7fb37fc7",
            description:
                "Conception d'applications web robustes en JavaScript Vanilla ou à l’aide de frameworks modernes comme Svelte ou encore React",
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
            color: "#50789ea8",
            description:
                "Réalisation d'interfaces adaptatives et esthétiques, en assurant une compatibilité sur mobiles, tablettes et desktops",
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
            color: "#923f3f7e",
            description:
                "Conception et déploiement de solutions algorithmiques performantes et optimisées",
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
        const timeout = setTimeout(() => (showLoader = false), 4200);
        return () => clearTimeout(timeout);
    });

    const handleMouseEnter = (i) => (hoveredIndex = i);
    const handleMouseLeave = () => (hoveredIndex = null);

    function defineBadgeColor(sectionColor) {
        let color = $darkMode;
        console.log(sectionColor)
        
        if (sectionColor === "#7fb37fc7") // dev web
            return ("success");
        if (sectionColor === "#50789ea8") // inté resp
            return ("primary");
        if (sectionColor === "#923f3f7e") // algo 
            return ("danger");
    }

    function badgeDefaultColor() {
        if ($darkMode)
            return ("dark");
        return ("secondary");
    }
</script>

{#if showLoader}
    <div class="loader-container">
        <div class="loader-ball" style="animation-delay: 0s"></div>
        <div class="loader-ball" style="animation-delay: 0.3s"></div>
        <div class="loader-ball" style="animation-delay: 0.6s"></div>
    </div>
{:else}
    <div
        class="skills-presentation"
    >
        {#each sections as section, index}
            <div
                class="section-card"
                on:mouseenter={() => handleMouseEnter(index)}
                on:mouseleave={handleMouseLeave}
                style={hoveredIndex === index
                    ? `--hover-color:${section.color}`
                    : ""}
                in:fly={{ y: 40, duration: 500, delay: index * 200 }}
            >
                <h2 style={$darkMode ? "color: white" : "color: #c4c1c1;"}>
                    {section.title}
                </h2>

                <p
                    style={$darkMode
                        ? "color: #b3b0b0; padding: 2vh 0 2vh;"
                        : "color: white; padding: 2vh 0 2vh;"}
                >
                    {section.description}
                </p>

                <div class="keywords">
                    {#each section.keywords as key}
                        <div
                            in:fly={{ y: 40, duration: 50, delay: index * 10 }}
                        >
                            <Badge color={hoveredIndex === index ? defineBadgeColor(section.color) : badgeDefaultColor()}>
                                {key}
                            </Badge>
                        </div>
                    {/each}
                </div>
            </div>
        {/each}
    </div>
{/if}

<style>
 /* -------------------------------------------------------------
   LOADER
------------------------------------------------------------- */
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
    0%   { margin-top: -80vh; }
    30%  { margin-top: 10vh; }
    70%  { margin-top: -10vh; }
    100% { margin-top: 110vh; }
}

.loader-ball {
    width: 8vh;
    height: 8vh;
    background-color: #c5bdbdd2;
    border-radius: 50%;
    animation: bounce 1.2s infinite ease-in-out;
}

@keyframes bounce {
    0%, 100% { transform: translateY(0); opacity: .6; }
    50%      { transform: translateY(-20px); opacity: 1; }
}


/* -------------------------------------------------------------
   SKILLS PRESENTATION (CONTAINER + SABLE ANIMÉ)
------------------------------------------------------------- */
.skills-presentation {
    padding: 4vh 2vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4vh;

    position: relative;
    isolation: isolate;
    overflow: hidden;
    z-index: 0;
}

/* --- grains de sable colorés dynamiquement --- */
.skills-presentation::before {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;

    background-image:
        radial-gradient(circle, color-mix(in srgb, var(--bg-color) 70%, transparent) 0%, transparent 55%),
        radial-gradient(circle, color-mix(in srgb, var(--bg-color) 50%, transparent) 0%, transparent 60%),
        radial-gradient(circle, color-mix(in srgb, var(--bg-color) 35%, transparent) 0%, transparent 65%);

    background-size:
        260% 260%,
        320% 320%,
        380% 380%;

    background-repeat: no-repeat;

    opacity: 0;
    transition: opacity .4s ease;
    z-index: 0;
}

/* activation de l’effet sable + animation */
.skills-presentation[style*="--bg-color"]::before {
    opacity: .55;
    animation: sandFlow 20s ease-in-out infinite;
}

/* animation lente et naturelle */
@keyframes sandFlow {
    0% {
        background-position:
            0% 0%,
            30% 30%,
            100% 100%;
    }
    33% {
        background-position:
            20% 40%,
            60% 70%,
            30% 90%;
    }
    66% {
        background-position:
            80% 20%,
            40% 10%,
            10% 60%;
    }
    100% {
        background-position:
            0% 0%,
            30% 30%,
            100% 100%;
    }
}


/* -------------------------------------------------------------
   SECTION CARDS
------------------------------------------------------------- */
.section-card {
    max-width: 80vw;
    background: #ffffff1a;
    border-radius: 1.5rem;
    padding: 3vh 3vw;

    box-shadow: 0 8px 24px #0000001a;
    backdrop-filter: blur(10px);
    border: 1px solid #c8c8c833;

    transition: transform .3s ease, background .4s ease, filter .4s ease;
    position: relative;
    z-index: 1;
}

.section-card:hover {
    transform: translateY(-5px);
}

.section-card[style*="--hover-color"] {
    background: linear-gradient(135deg, var(--hover-color), rgba(255,255,255,0.05));
    background-size: 200% 200%;
    animation: cardShift 3s ease forwards;
    filter: brightness(1.15);
}

@keyframes cardShift {
    0%   { background-position: 0% 50%; background-color: inherit;}
    100%  { background-position: 98% 50%; }
}


/* -------------------------------------------------------------
   TEXTES
------------------------------------------------------------- */
h2 {
    font-size: 1.8rem;
    margin-bottom: 1vh;
}

p {
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 2vh;
}


/* -------------------------------------------------------------
   BADGES
------------------------------------------------------------- */
.keywords {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
}

.dynamic-badge {
    transition: background-color .3s ease, color .3s ease;
}

/* badges prennent la couleur de la section */
.section-card[style*="--hover-color"] .dynamic-badge {
    background-color: var(--hover-color) !important;
    color: white !important;
}


/* -------------------------------------------------------------
   RESPONSIVE
------------------------------------------------------------- */
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


.test {
  color :#7fb37fc7;
  color: #923f3f7e;
  color: #50789ea8;
  color: #c4c1c1;
}

</style>
