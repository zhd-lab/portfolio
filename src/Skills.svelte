<script>
    import { Card, Image, Button } from "sveltestrap";
    import Navbar from "./Navbar.svelte";
    import { onMount } from "svelte";
    import { darkMode } from "../stores/stateStore";
    import SkillsGrid from "./SkillsGrid.svelte";
</script>

<main class="main">
    <Card
        color={$darkMode ? "dark" : "secondary"}
        style="width: 96vw; height: 96vh; margin: 2vh; overflow-y: scroll; padding-top: 0vh; background-color: {$darkMode
            ? '#121212'
            : '#ffffff'}; color: {$darkMode ? '#ffffff' : '#000000'};"
    >
        <!-- Navbar -->
        <div
            style="position: sticky; top: 0; z-index: 10; background-color: inherit; padding: 2vh; backdrop-filter: blur(10px);"
        >
            <Navbar />
        </div>

        <SkillsGrid />
    </Card>
</main>

<style>
    /* scrollbar */
    .main::-webkit-scrollbar {
        width: 12px;
    }

    .main::-webkit-scrollbar-track {
        background: transparent;
    }

    .main::-webkit-scrollbar-thumb {
        background-color: #888; /* couleur du "pouce" */
        border-radius: 6px;
        border: 3px solid transparent;
        background-clip: content-box;
    }

    .main::-webkit-scrollbar-thumb:hover {
        background-color: #555;
    }

    /* Optionnel : pour Firefox */
    .main {
        scrollbar-width: thin; /* "auto" ou "thin" */
        scrollbar-color: #888 transparent; /* couleur du pouce et du fond */
        
    }
</style>
