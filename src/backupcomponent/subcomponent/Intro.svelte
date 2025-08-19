<script>
    import {
        black,
        white,
        greenMain,
        greenSub,
        grey,
        isFlipped,
    } from "../../stores/stateStore";
    import AnimPrimary from "./AnimPrimary.svelte";
    import IntroButton from "./IntroButton.svelte";

    $: colorBlack = $black;
    $: colorWhite = $white;
</script>

<main class="main" style="background-color: {colorBlack}; color: {colorWhite};">
    <!--
        <IntroButton />
    -->
    <AnimPrimary />
</main>

<style>
    .main {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        height: 100vh;
        background: #14352296; /* Couleur initiale */
        animation: background-transition 3s forwards;
    }

    @keyframes background-transition {
        0% {
            opacity: 0.2;
            background: #223b29a6; /* Début : couleur initiale */
        }
        90% {
            background: linear-gradient(to right, #223b29a6, #333333, #223b29a6);
        }
        100% {
            background: linear-gradient(to right, #263a2bd8, #333333, #263a2bd8);
        }
    }
</style>
