<script>
    import { state } from "../../stores/stateStore";
    import { Card, Button, Image } from "sveltestrap";

    import demo1 from "../assets/projet_icons/logoVisualFlow.png";
    import demo2 from "../assets/projet_icons/logoTranscod.png";
    import demo3 from "../assets/projet_icons/logoCrypto.png";
    import demo4 from "../assets/projet_icons/graph.png";

    function backToMenu() {
        state.set("menu");
    }

    let demo = [demo1, demo2, demo3, demo4];
    let hoveredIndex = null;
    let projectRoutes = ["Visual Flow", "Transcod", "Crypto Board", "Stat"];

    function targetedRoot(rootId) {
        console.log("route cible: " + rootId);
        state.set(rootId);
    }
</script>

<div id="box">
    <Button
        color="dark"
        outline
        style="position: absolute; top: 2vh; left: 2vh; padding: 1vh 2vh;"
        on:click={backToMenu}>Retour</Button
    >

    <div class="card-container">
        {#each demo as image, index}
            <!-- svelte-ignore a11y-mouse-events-have-key-events -->
            <div
                id="card-{index}"
                class="grid-card {hoveredIndex !== null &&
                hoveredIndex !== index
                    ? 'blurred'
                    : ''}"
                style="transform: scale({hoveredIndex === index
                    ? 1.2
                    : 0.9}); opacity: {hoveredIndex !== null &&
                hoveredIndex !== index
                    ? 0.7
                    : 1};"
                on:mouseover={() => (hoveredIndex = index)}
                on:mouseout={() => (hoveredIndex = null)}
            >
                <Image
                    src={image}
                    alt={`Image ${index + 1}`}
                    style="height: 65vh; max-width: 100%; border-radius: 1vh;"
                />
                <br />
                <Button
                    color="dark"
                    outline
                    on:click={() => targetedRoot(projectRoutes[index])}
                    style="margin-top: 2vh; font-weight: bold; font-size: 2vh;"
                >
                    {projectRoutes[index]}
                </Button>
            </div>
        {/each}
    </div>
</div>

<style>
    #box {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100vh;
        background: black;
        border-radius: 0;
        padding: 2vh;
        position: relative;
    }

    #card-0 {
        animation: c-0 1.5s ease-in forwards;
    }
    @keyframes c-0 {
        0% {
            opacity: 0;
        }
        20% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
    #card-1 {
        animation: c-1 2s ease-in forwards;
    }
    @keyframes c-1 {
        0% {
            opacity: 0;
        }
        40% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
    #card-2 {
        animation: c-2 2s ease-in forwards;
    }
    @keyframes c-2 {
        0% {
            opacity: 0;
        }
        60% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
    #card-3 {
        animation: c-3 2s ease-in forwards;
    }
    @keyframes c-3 {
        0% {
            opacity: 0;
        }
        80% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    .card-container {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 3vh;
        width: 100%;
        margin-top: 10vh;
    }

    .grid-card {
        box-shadow: 0vh 0vh 0.6vh 0px #282931;
        background: inherit;
        padding: 2vh;
        border: solid rgba(0, 0, 0, 0.356) 0.1vh;
        border-radius: 1vh;
        transition:
            transform 0.4s ease,
            opacity 0.3s ease,
            filter 0.3s ease;
        width: 20vw;
        text-align: center;
    }

    .grid-card.blurred {
        filter: blur(1.5vh) brightness(0.4)
            drop-shadow(0 0 100px rgba(0, 0, 0, 0.7));
    }
</style>
