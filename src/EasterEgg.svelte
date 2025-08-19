<script>
    import { Card } from "sveltestrap";
    import Navbar from "./Navbar.svelte";
    import { darkMode, state } from "../stores/stateStore";
    import EasterEggAnim from "./EasterEggAnim.svelte";
</script>

<main
    class="main"
    color={$darkMode ? "dark" : "light"}
    style="width: 96vw; height: 96vh; margin: 2vh; background-color: {$darkMode
        ? '#121212'
        : '#ffffff'}; color: {$darkMode ? '#ffffff' : '#000000'};"
>
    <div class="navbar-wrapper">
        <Navbar />
    </div>

    <div class="scroll-box">
        <EasterEggAnim />
    </div>
</main>

<style>
    .main {
        padding: 0vh;
        border: solid grey 0.1vh;
        border-radius: 2vh;
    }

    .scroll-box {
        width: 96vw;
        height: 86.5vh;
        display: flex;
        justify-content: center;
        overflow-y: scroll;
        overflow-x: hidden;
        border-bottom-left-radius: 2vh;
        border-bottom-right-radius: 2vh;
    }

    /* scrollbar */
    .scroll-box::-webkit-scrollbar {
        width: 0vh;
    }

    .scroll-box::-webkit-scrollbar-track {
        background: transparent;
    }

    .scroll-box::-webkit-scrollbar-thumb:hover {
        background-color: #555;
    }
</style>
