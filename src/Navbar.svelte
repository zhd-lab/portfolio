<script>
    import { Button } from "sveltestrap";
    import { darkMode, toggleDarkMode, state } from "../stores/stateStore";
    import { onMount } from "svelte";

    // Références DOM des boutons
    let stackBtn, boardBtn, skillsBtn;
    let indicatorLeft = 0;
    let indicatorWidth = 0;

    // Réactivité du store
    $: currentState = $state;

    // Styles dynamiques du body selon dark mode
    $: {
        document.body.classList.toggle("dark", $darkMode);
        document.body.style.backgroundColor = $darkMode ? "#121212" : "#ffffff";
        document.body.style.color = $darkMode ? "#ffffff" : "#000000";
    }

    // Mise à jour de l'indicateur animé
    function updateIndicator() {
        let el;
        if (currentState === "stack") el = stackBtn;
        else if (currentState === "board") el = boardBtn;
        else if (currentState === "competences") el = skillsBtn;

        if (el) {
            const rect = el.getBoundingClientRect();
            const parentRect = el.parentElement.getBoundingClientRect();
            indicatorLeft = rect.left - parentRect.left;
            indicatorWidth = rect.width;
        }
    }

    // Réactif et initialisé au montage
    $: updateIndicator();
    onMount(updateIndicator);
</script>

<!-- Barre de navigation principale -->
<div style="display: flex; justify-content: space-between; align-items: center; padding: 1rem; border-radius: 2vh;">
    
    <!-- Lien GitHub -->
    <a href="https://github.com/zhd-lab" target="_blank" style="text-decoration: none;">
        <Button color={$darkMode ? "dark" : "secondary"} style="display: flex; align-items: center;">
            <i class="fab fa-github" style="font-size: 1.5rem; margin-right: 0.5rem;"></i>
            GitHub
        </Button>
    </a>

    <!-- Groupe central de navigation -->
    <div style="flex: 1; display: flex; justify-content: center;">
        <div class="center-grp" style="position: relative;">
            
            <!-- Indicateur animé -->
            <div
                class="indicator"
                style="left: {indicatorLeft}px; width: {indicatorWidth}px;"
            ></div>

            <!-- Boutons de navigation -->
            <button
                bind:this={stackBtn}
                class="nav-button"
                on:click={() => state.set("stack")}
            >
                Stack
            </button>
            <button
                bind:this={boardBtn}
                class="nav-button"
                on:click={() => state.set("board")}
            >
                Board
            </button>
            <button
                bind:this={skillsBtn}
                class="nav-button"
                on:click={() => state.set("competences")}
            >
                Skills
            </button>
        </div>
    </div>

    <!-- Toggle dark mode -->
    <Button color="dark" on:click={toggleDarkMode}>
        {#if $darkMode}
            ☀️
        {:else}
            🌙
        {/if}
    </Button>
</div>

<style>
    .center-grp {
        display: flex;
        background-color: #80808027;
        border-radius: 10vh;
        gap: 2vh;
        overflow: hidden;
        padding: 0;
    }

    .nav-button {
        height: 6vh;
        background-color: transparent;
        color: inherit;
        border: none;
        padding: 0.5vh 2vh;
        font: inherit;
        cursor: pointer;
        outline: none;
        border-radius: 10vh;
        transition: background-color 0.3s ease, color 0.3s ease;
        z-index: 1;
        position: relative;
    }

    .nav-button:hover {
        background-color: #8b8d91c7;
        color: white !important;
    }

    :global(body.dark) .nav-button:hover {
        background-color: #ffffff1a !important;
        color: grey !important;
    }

    .indicator {
        position: absolute;
        top: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.1);
        border-radius: 10vh;
        transition: left 0.3s ease, width 0.6s ease-in-out;
        z-index: 0;
    }

    :global(body.dark) .indicator {
        background-color: rgba(255, 255, 255, 0.1);
    }
</style>
