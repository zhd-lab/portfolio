<script>
    import { Card } from "sveltestrap";
    import Shell from "./Shell.svelte";
    import { isFlipped } from "../../stores/stateStore";
    import CubicAnimation from "./CubicAnimation.svelte";
    import BtnGo from "./BtnGo.svelte";
    import ConfigBar from "./ConfigBar.svelte";

    setTimeout(() => {
        isFlipped.set(true);
        console.log("isFlipped set to true");
    }, 5800);
</script>

<div class="main" style="width: 90vw; height: 50vh; display: flex; justify-content: center; place-items: center; flex-direction: row;">
    <section class="container diagram">
        <div class="side front" style="border: solid red 0vh;">
            <header class="header" style="border: solid brown 0vh;">
                <div class="shape">
                    <div
                        class="rectangle-md body"
                        style="border: solid yellow 0vh;"
                    >
                    
                    </div>
                    <div class="rectangle-md border">
                        <h4 style="color: white;">Marwane</h4>
                    </div>
                </div>
                <div class="shape" style="border: solid red 0vh;">
                    <div class="square body" style="border: solid red 0vh;">
                        <BtnGo />
                    </div>
                    <div class="square border"></div>
                </div>
            </header>
            <div class="shape" style="border: solid orange 0vh;">
                <div
                    class="rectangle-lg body"
                    style="border: solid purple 0vh;"
                >
                    {#if $isFlipped}
                        <Shell {isFlipped} />
                    {:else}
                        <CubicAnimation />
                    {/if}
                </div>
                <div class="rectangle-lg border"></div>
            </div>
        </div>
        <div class="side back" style="border: solid white 0.1vh;"></div>
    </section>
</div>

<style>
    :root {
        /* border & bg colors */
        --light-gray: 175, 175, 175;

        /* anim timing */
        --global-time: 4.5s;
        --full-body-rotation-time: 5s;
        --full-spin-time: 2s;
        --separation-back-time: 1.5s;
        --separation-body-time: 0.4s;
    }

    /* context */
    * {
        margin: 0px;
        padding: 0px;
    }

    @keyframes full-body-rotation {
        0% {
            transform: rotateY(400deg) rotateX(80deg);
        }
        70% {
            transform: rotateY(20deg) rotateX(10deg);
        }
        100% {
            transform: rotateY(20deg) rotateX(0deg);
            border-radius: 2vh;
        }
    }

    @keyframes separation-back {
        from {
            transform: translateZ(-75px);
        }
        to {
            transform: translateZ(0px);
            border-radius: 1vh;
        }
    }

    @keyframes separation-body {
        from {
            transform: translateZ(60px) translate(-50%, -50%);
        }
        to {
            transform: translateZ(0px) translate(-50%, -50%);
        }
    }

    @keyframes full-spin {
        0% {
            transform: rotateY(-35deg) rotateX(25deg);
        }
        100% {
            transform: rotateY(-360deg) rotateY(35deg) rotateX(25deg);
        }
    }

    .container {
        transform-style: preserve-3d;
        width: 50%;
        display: flex;
        justify-content: center;
        place-items: center;
    }

    .diagram {
        transform: rotateY(400deg) rotateX(90deg);
        animation: full-body-rotation var(--full-body-rotation-time) ease-in-out
            forwards;
        animation-delay: 0.5s;
        perspective: 2000px;
    }

    .side {
        position: absolute;
        width: 380px;
        height: 380px;
    }

    .front.side {
        transform-style: inherit;
        width: 70vw;
        height: 50vh;
        background: rgba(30, 30, 30, 0.8);
        border: 2vh dashed rgba(var(--light-gray), 0.8);
        border-radius: 1vh;
        padding: 1.5rem;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
    }

    .back.side {
        width: 70vw;
        height: 50vh;
        border: 2px solid rgb(var(--light-gray));
        padding: 1.5rem;
        transform: translateZ(-75px);
        animation: separation-back var(--separation-back-time) ease-in-out
            forwards;
        animation-delay: 2.5s;
    }

    .header {
        transform-style: inherit;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .shape {
        transform-style: inherit;
    }

    .body {
        background-color: rgba(var(--light-gray), 0.8);
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        position: absolute;
    }

    .border {
        border: 2px dashed rgba(75, 75, 75, 0.7);
    }

    .rectangle-md {
        text-align: center;
        padding: 2vh;
        color: white;
        border-radius: 1vh;
        height: 7vh;
        width: 100%;
    }

    .rectangle-md.body {
        transform: translateZ(60px) translate(-50%, -50%);
        animation: separation-body var(--separation-body-time) ease-in-out
            forwards;
        animation-delay: 4.25s;
    }

    .square {
        height: 7vh;
        width: 4vw;
        border-radius: 1vh;
    }

    .square.body {
        transform: translateZ(60px) translate(-50%, -50%);
        animation: separation-body var(--separation-body-time) ease-in-out
            forwards;
        animation-delay: 4.4s;
        background-color: inherit;
    }

    .rectangle-lg {
        margin-left: 3px;
        border-radius: 1vh;
        height: 35vh;
        width: 99%;
    }

    .rectangle-lg.body {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;

        margin-left: 2px;
        transform: translateZ(60px) translate(-50%, -50%);
        animation: separation-body var(--separation-body-time) ease-in-out
            forwards;
        animation-delay: 4.6s;
    }
    
</style>
