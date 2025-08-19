<script>
    import { Button, Card } from "sveltestrap";
    import Shell from "./Shell.svelte";
    import { isFlipped, state } from "../stores/stateStore";
    import CubicAnimation from "./CubicAnimation.svelte";
    import BtnGo from "./BtnGo.svelte";

    let btnStr = "</>";

    setTimeout(() => {
        isFlipped.set(true);
        console.log("isFlipped set to true");
    }, 5800);

    function stateChange() {
        state.set("egg");
    }
</script>

<div
    class="main"
    style="width: 90vw; height: 50vh; display: flex; justify-content: center; place-items: center; flex-direction: row;"
>
    <section class="container diagram">
        <div class="side front">
            <header class="header">
                <div class="shape">
                    <div class="rectangle-md body"></div>
                    <div class="rectangle-md border">
                        <h4 style="color: white;">Marwane</h4>
                    </div>
                </div>
                <div class="shape">
                    <div class="square body"></div>
                    <div class="square border">
                        {#if $isFlipped}
                            <button class="btn-go" on:click={stateChange}>
                                <p>{btnStr}</p>
                            </button>
                        {/if}
                    </div>
                </div>
            </header>
            <div class="shape">
                <div class="rectangle-lg body">
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

    .btn-go > p {
        white-space: nowrap;
    }

    .btn-go {
        font-weight: bold;
        white-space: nowrap;
        width: 7vw;
        height: 7vh;
        background-color: grey;
        color: black;
        z-index: 10;
        position: absolute;
        border-radius: 1vh;
        border: solid 0.1vh white;
        font-size: 2.5vh;
        display: flex;
        align-items: center;
        justify-content: center;
        animation: btnAnim 6s ease-in-out forwards;
        transition:
            border-color 0.5s ease-in-out,
            background 0.3s ease-in-out,
            color 0.5s ease-in-out,
            border-width 0.5s ease-in-out;
    }
    @keyframes btnAnim {
        0% {
            opacity: 0;
        }
        80% {
            opacity: 0;
            margin-left: 20vh;
        }
        100% {
            opacity: 1;
        }
    }

    .btn-go:hover {
        background-color: #494545;
        color: white;
        cursor: pointer;
    }
    @keyframes btnAnimHover {
        from {
        }
        to {
            margin-left: 1vh;
            margin-top: -1vh;
            width: 7vw;
            height: 7vh;
            border-color: #8d8686;
            color: white;
            border: solid rgba(0, 0, 0, 0.788) 0.4vh;
            font-weight: bold;
            cursor: pointer;
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
        background: #1e1e1ecc;
        /* border: 0.6vh dashed rgba(var(--light-gray), 0.8); */
        border-radius: 1vh;
        padding: 1.5rem;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
    }

    .back.side {
        width: 70vw;
        height: 50vh;
        border: 0.2vh solid rgb(var(--light-gray));
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
        width: 7vw;
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
