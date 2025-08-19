<script>
    import { onMount } from "svelte";
    import AnimShell from "./AnimShell.svelte";
    import { state } from "../stores/stateStore";
    import { Button } from "sveltestrap";

    let text = "";
    const fullText = "Développeur d'applications web";
    let index = 0;

    export let isFlipped;

    onMount(() => {
        if (isFlipped) {
            setTimeout(() => {
                const interval = setInterval(() => {
                    if (index < fullText.length) {
                        text += fullText[index];
                        index++;
                    } else {
                        clearInterval(interval);
                    }
                }, 100);
            }, 1900);
        }
    });

</script>

<div class="terminal">
    <div class="terminal-header">
        <div class="dot red"></div>
        <div class="dot yellow"></div>
        <div class="dot green"></div>
    </div>
    <div class="terminal-body">{text}</div>
    <div class="go-container">
    </div>
</div>

<style>
    .terminal {
        border-radius: 1vh;
        width: 100%;
        height: 100%;
        background-color: black;
        color: grey;
        font-family: monospace;
        padding: 2vh;
        box-shadow: 0 4px 10px #0000004d;
        display: flex;
        flex-direction: column;
        animation: fadeIn 1.5s ease-in forwards;
    }

    .terminal-header {
        display: flex;
        gap: 8px;
        padding: 1vh;
    }

    .dot {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        opacity: 0;
        animation: fadeIn 1s ease-in-out forwards;
    }

    .red {
        background: red;
        animation-delay: 0s;
    }

    .yellow {
        background: yellow;
        animation-delay: 1s;
    }

    .green {
        background: green;
        animation-delay: 2s;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    .terminal-body {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2.5vh;
    }

    .go-container {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #go {
        animation: fade-in-out 1.8s ease-in-out infinite;
    }

    @keyframes fade-in-out {
        0% {
            opacity: 0.1;
        }
        50% {
            opacity: 1;
        }
        100% {
            opacity: 0.1;
        }
    }
</style>
