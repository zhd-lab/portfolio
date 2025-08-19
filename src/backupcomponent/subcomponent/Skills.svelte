<script>
    import { onMount, afterUpdate } from "svelte";
    import { writable } from "svelte/store";
    import { get } from "svelte/store";
    import Chart from "chart.js/auto";
    import { ListGroup, Badge } from "sveltestrap";
    import {
        cssDesc,
        jsDesc,
        htmlDesc,
        svelteDesc,
        sveltestrapDesc,
        bootstrapDesc,
        bulmaDesc,
        cDesc,
        shellDesc,
        pythonDesc,
    } from "../../stores/stateStore";
    import { ongletState } from "../../stores/stateStore";
    import Onglet from "./Onglet.svelte";
    import DocSkills from "./DocSkills.svelte";
    import BackBtn from "./BackBtn.svelte";

    export let skills = [
        { name: "CSS", level: 80, type: "language", desc: cssDesc, recap: "" },
        {
            name: "JavaScript",
            level: 85,
            type: "language",
            desc: jsDesc,
            recap: "JavaScript : Langage de programmation essentiel pour le développement web interactif. Utilisé côté client pour manipuler le DOM, gérer les événements et effectuer des requêtes asynchrones",
        },
        {
            name: "HTML",
            level: 90,
            type: "language",
            desc: htmlDesc,
            recap: "Langage de balisage structurant les pages web. Il définit la hiérarchie et le contenu des éléments affichés dans un navigateur",
        },
        {
            name: "Svelte",
            level: 75,
            type: "framework",
            desc: svelteDesc,
            recap: "Framework JavaScript moderne permettant de créer des interfaces utilisateur performantes en compilant le code en JavaScript natif",
        },
        {
            name: "Sveltestrap",
            level: 70,
            type: "framework",
            desc: sveltestrapDesc,
            recap: "Bibliothèque combinant Svelte et Bootstrap, facilitant la création d'interfaces réactives et responsives avec des composants préconçus",
        },
        {
            name: "Bootstrap",
            level: 85,
            type: "framework",
            desc: bootstrapDesc,
            recap: "Framework CSS populaire pour créer des interfaces web responsives et modernes grâce à son système de grille et ses composants prêts à l'emploi",
        },
        {
            name: "Bulma",
            level: 60,
            type: "framework",
            desc: bulmaDesc,
            recap: "Framework CSS alternatif à Bootstrap, axé sur la simplicité et la flexibilité avec une syntaxe en classes purement CSS",
        },
        {
            name: "C",
            level: 50,
            type: "language",
            desc: cDesc,
            recap: "Langage bas niveau utilisé pour le développement système, les logiciels embarqués et les applications nécessitant des performances optimisées",
        },
        {
            name: "Shell",
            level: 65,
            type: "language",
            desc: shellDesc,
            recap: "Utilisé pour l'automatisation de tâches sous Linux et Unix via des scripts, facilitant la gestion de fichiers et l'administration système",
        },
        {
            name: "Python",
            level: 95,
            type: "language",
            desc: pythonDesc,
            recap: "Langage polyvalent employé en développement web, data science, intelligence artificielle, scripting et automatisation",
        },
    ];

    let selectedSkill = writable(skills[0]);
    let currentSkill = writable("CSS");
    let chartCanvas;
    let chartInstance;

    onMount(() => {
        const buttons = document.querySelectorAll(".list_btn");
        let maxWidth = 0;

        buttons.forEach((btn) => {
            const width = btn.offsetWidth;
            if (width > maxWidth) {
                maxWidth = width;
            }
        });

        buttons.forEach((btn) => {
            btn.style.width = `${maxWidth}px`;
        });
    });

    function targetSkillBorder(skill) {
        return get(currentSkill) === skill.name
            ? "border: solid 0.3vh #178582;"
            : "";
    }

    function updateChart(skill) {
        let currentColor = skill.type === "framework" ? "#ffc107" : "#2C6E49";

        if (chartInstance) {
            chartInstance.destroy();
        }

        if (chartCanvas) {
            chartInstance = new Chart(chartCanvas, {
                type: "doughnut",
                data: {
                    labels: [skill.name, ""],
                    datasets: [
                        {
                            data: [skill.level, 100 - skill.level],
                            backgroundColor: [currentColor, "#6e8dbe4d"],
                        },
                    ],
                },
            });
        }
    }

    function defineColor(type) {
        return type === "framework" ? "warning" : "success";
    }

    // Re-render the chart when the ongletState changes to "canvas"
    afterUpdate(() => {
        if ($ongletState === "canvas" && chartCanvas) {
            const skill = $selectedSkill;
            updateChart(skill);
        }
    });

    onMount(() => {
        // Ensure chart is created on mount if selectedSkill has a value
        if (chartCanvas) {
            const skill = $selectedSkill;
            updateChart(skill);
        }
    });
</script>

<div class="box">
    <div class="row">
        <div class="col-3 left">
            <BackBtn />
            <ListGroup flush style="margin-top: 17vh;">
                {#each skills as skill}
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <div
                        class="list_btn {$currentSkill === skill.name
                            ? 'selected'
                            : ''}"
                        on:click={() => {
                            selectedSkill.set(skill);
                            updateChart(skill);
                            currentSkill.set(skill.name);
                        }}
                    >
                        <Badge color={defineColor(skill.type)}
                            >{skill.type}</Badge
                        >
                        <span class="skill-name">{skill.name}</span>
                    </div>
                {/each}
            </ListGroup>
        </div>
        <div class="col right">
            <div class="canvas_box">
                <div
                    class="onglet-bar"
                    style="margin-bottom: 4vh; padding-left: 20vh;"
                >
                    <Onglet />
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col" style="margin-top: 6vh;">
                            {#if $ongletState === "canvas"}
                                <canvas bind:this={chartCanvas} />
                            {:else}
                                <DocSkills { skill } />
                            {/if}
                        </div>
                        <div class="col">
                            <div
                                color={defineColor($selectedSkill.type)}
                                style="margin: 1vh; margin-top: 14vh; color: white; font: bold;"
                            >
                                {#if Array.isArray(get($selectedSkill.desc))}
                                    {#each get($selectedSkill.desc) as desc}
                                        <div style="margin: 2vh 0vh 2vh 0vh;">
                                            <span
                                                style="color: #178582; font-weight: bold; font-size: 2.5vh;"
                                            >
                                                ⬪
                                            </span>
                                            <span
                                                style="font-weight: bold; font-size: 2.5vh;"
                                                >{desc}</span
                                            >
                                        </div>
                                    {/each}
                                {:else}
                                    <div>{get($selectedSkill.desc)}</div>
                                {/if}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    .box {
        width: 100%;
        height: 100%;
        overflow: hidden;
        display: flex;
        flex-direction: column;
    }

    .row {
        flex-grow: 1;
        display: flex;
        height: 100%;
    }

    .left,
    .right {
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    .canvas_box {
        padding-top: 6vh;
        padding-right: 2vh;
        flex-grow: 1;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
    }

    .list_btn {
        display: inline-flex;
        align-items: center;
        cursor: pointer;
        height: 6vh;
        min-width: max-content; /* Ajuste selon le contenu */
        max-width: 40%; /* Empêche de dépasser la zone */
        padding: 1vh;
        margin-bottom: 0.2vh;
        margin-top: 0.2vh;
        border-top-right-radius: 2vh;
        border-bottom-right-radius: 2vh;
        border: solid #223b29a6 0.1vh;
        background: #223b29a6;
        transition: background 1s ease-in-out;
        position: relative;
        overflow: hidden;
        white-space: nowrap; /* Évite les retours à la ligne */
    }

    .list_btn::before {
        content: "";
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        opacity: 0.3;
        background: #6e8dbe4d;
        border: solid #8da7a6 0.1vh;
        border-top-right-radius: 2vh;
        border-bottom-right-radius: 2vh;
        transition: left 0.5s ease-in-out;
    }

    .list_btn:hover::before {
        left: 0;
    }

    .skill-name {
        margin-left: 1vh;
    }

    .selected {
        font-weight: bold;
        opacity: 0.8;
        border: solid 0.1vh #399c76 !important;
    }
</style>
