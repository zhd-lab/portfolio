<script>
    import AstronautAnim from "./AstronautAnim.svelte";

    let animationState = false;

    function startAnimationSequence() {
        setTimeout(() => {
            animationState = true;

            setTimeout(() => {
                animationState = "end";
            }, 5000);
        }, 10000);
    }

    startAnimationSequence();
</script>

<div class="black-hole-wrapper">
    {#if !animationState}
        <div class="black-hole-core">
            {#each Array(15) as _, i}
                <div class="layer layer-{i + 1}"></div>
            {/each}
            <div class="neutron"></div>
        </div>
    {:else if animationState === "end"}
        <div class="box">
            <div class="stars"></div>
            <div class="galaxy"></div>

            <div class="moon">
                <div class="crater"></div>
                <div class="crater"></div>
            </div>

            <div class="cardbox">
                <AstronautAnim />
            </div>
        </div>
    {:else}
        <div class="line">
            <div class="circle"></div>
        </div>
    {/if}
</div>

<style>
    .moon {
        position: absolute;
        top: 10vh;
        right: -15vw;
        width: 55vw;
        height: 55vw;
        background: radial-gradient(
            circle at 30% 30%,
            #ddd,
            #888 60%,
            #555 90%
        );
        border-radius: 50%;
        box-shadow:
            inset 5vw 5vw 6vw #aaa,
            inset -2vw -2vw 3vw #444;
        filter: drop-shadow(0 0 0.5vw #aaa);
        animation: moveMoon 40s linear infinite;
        z-index: 0;
        overflow: visible;
    }

    .moon::before,
    .moon::after,
    .moon > .crater {
        content: "";
        position: absolute;
        border-radius: 50%;
        background: radial-gradient(
            circle at center,
            rgba(0, 0, 0, 0.3),
            transparent 70%
        );
        box-shadow: inset 0.1vw 0.1vw 0.4vw rgba(255, 255, 255, 0.4);
        opacity: 0.6;
    }

    .moon::before {
        width: 5vw;
        height: 5vw;
        top: 20%;
        left: 25%;
        background: radial-gradient(circle at center, #666, #333 60%);
        box-shadow:
            inset 0.3vw 0.3vw 0.6vw #999,
            inset -0.3vw -0.3vw 0.6vw #222;
        opacity: 0.9;
    }

    .moon::after {
        width: 3.5vw;
        height: 3.5vw;
        top: 55%;
        left: 60%;
        background: radial-gradient(circle at center, #777, #444 60%);
        box-shadow:
            inset 0.2vw 0.2vw 0.5vw #aaa,
            inset -0.2vw -0.2vw 0.5vw #222;
        opacity: 0.85;
    }

    .moon > .crater:nth-child(1) {
        width: 2.5vw;
        height: 2.5vw;
        top: 65%;
        left: 30%;
        background: radial-gradient(circle at center, #555, #222 60%);
        box-shadow:
            inset 0.15vw 0.15vw 0.4vw #888,
            inset -0.15vw -0.15vw 0.4vw #111;
        opacity: 0.8;
    }

    .moon > .crater:nth-child(2) {
        width: 3vw;
        height: 3vw;
        top: 40%;
        left: 50%;
        background: radial-gradient(circle at center, #666, #333 60%);
        box-shadow:
            inset 0.2vw 0.2vw 0.5vw #999,
            inset -0.2vw -0.2vw 0.5vw #222;
        opacity: 0.85;
    }

    @keyframes moveMoon {
        0% {
            opacity: 0.1;
            margin-top: -40vh;
            margin-right: -55vw;
        }
        50% {
            opacity: 0.8;
        }
        100% {
            opacity: 0.1;
            margin-right: 140vw;
        }
    }

    /* Boîte principale */
    .box {
        background-color: #252950 !important;
        height: 100%;
        width: 100%;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        animation: boxSpawn 2s ease-in forwards;
    }

    @keyframes boxSpawn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    .cardbox {
        width: 100%;
        height: 100%;
        border-bottom-left-radius: 2vh;
        border-bottom-right-radius: 2vh;
        padding: 2vh;
        border: #8686a3 solid 0.2vh;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 2;
    }

    /* Étoiles scintillantes */
    .stars {
        position: absolute;
        width: 200%;
        height: 200%;
        background: transparent
            url("https://www.transparenttextures.com/patterns/stardust.png")
            repeat;
        animation: moveStars 60s linear infinite;
        opacity: 0.4;
        z-index: 1;
    }

    @keyframes moveStars {
        0% {
            transform: translate(0, 0);
        }
        100% {
            transform: translate(-50%, -50%);
        }
    }

    /* Nébuleuse galaxie */
    .galaxy {
        position: absolute;
        width: 200%;
        height: 200%;
        background: radial-gradient(
            circle at center,
            #3b3b9a 0%,
            #232241 40%,
            #1d1d2f 100%
        );
        background-size: 200% 200%;
        border-radius: 50%;
        animation:
            rotateGalaxy 60s linear infinite,
            pulseGalaxy 10s ease-in-out infinite;
        z-index: 0;
        filter: blur(80px);
        opacity: 0.7;
    }

    @keyframes rotateGalaxy {
        0% {
            transform: rotate(0deg) scale(1);
        }
        100% {
            transform: rotate(360deg) scale(1);
        }
    }

    @keyframes pulseGalaxy {
        0%,
        100% {
            opacity: 0.6;
        }
        50% {
            opacity: 0.9;
        }
    }

    /* FIRST PART */
    .black-hole-wrapper {
        width: 100vw;
        height: 100%;
        background: radial-gradient(
            circle at center,
            #3b3b9a 0%,
            #232241 40%,
            #1d1d2f 100%
        );
        display: flex;
        justify-content: center;
        align-items: center;
        perspective: 1200px;
        overflow: hidden;
    }

    .black-hole-core {
        position: relative;
        width: 15vw;
        height: 15vw;
        border-radius: 50%;
        box-shadow:
            inset -2vw -2vw 4vw #ffffff0d,
            inset 2vw 2vw 4vw #000000cc,
            0 0 5vw #000000e6,
            0 0 2vw #6464ff1a;
        transform-style: preserve-3d;
        animation: spinCore 10s linear forwards;
    }

    @keyframes spinCore {
        0% {
            margin-top: -30vh;
            margin-left: 90vh;
            rotate: 0deg;
            background-color: #4781a833;
            box-shadow: 0 0 2vw #6464ff26;
        }

        50% {
            margin-left: 0vh;
            width: 75vw;
            height: 75vw;
            background-color: transparent;
            rotate: 360deg;
        }
        90% {
            width: 80vw;
            height: 80vw;
            rotate: 0deg;
            background-color: #4781a881;
            box-shadow: 0 0 2vw #6464ff26;
        }
        100% {
            width: 0vw;
            height: 0vw;
            opacity: 1;
        }
    }

    .neutron {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 2vw;
        height: 2vw;
        background-color: #6464ff26;
        border-radius: 50%;
        transform: translate(-50%, -50%);
        box-shadow: 0 0 1vw #4781a8dc;
        z-index: 2;
        animation: neutrAnim 9s ease-in-out forwards;
    }
    @keyframes neutrAnim {
        0% {
            opacity: 0;
        }
        80% {
            opacity: 1;
        }
        100% {
            width: 30vw;
            height: 30vw;
            opacity: 0;
        }
    }

    .layer {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        box-shadow: 0 0 2vw rgba(100, 100, 255, 0.15);
        border: 0.4vw solid rgba(200, 200, 255, 0.05);
        animation: pulse 3s ease-in-out infinite alternate;
    }

    @keyframes pulse {
        from {
            opacity: 0.4;
            transform: scale(0.96);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }

    /* Rotations différenciées comme orbe-3d */
    .layer-1 {
        transform: rotateX(0deg) rotateY(0deg) translateZ(2px);
        animation: orbit1 6s linear infinite;
    }

    .layer-2 {
        transform: rotateX(60deg) rotateY(45deg) translateZ(3px);
        animation: orbit2 5s linear infinite;
    }

    .layer-3 {
        transform: rotateX(-60deg) rotateY(-45deg) translateZ(-3px);
        animation: orbit3 5.5s linear infinite;
    }

    .layer-4 {
        transform: rotateX(30deg) rotateY(30deg) translateZ(4px);
        animation: orbit4 4.5s linear infinite;
    }

    .layer-5 {
        transform: rotateX(-30deg) rotateY(60deg) translateZ(-4px);
        animation: orbit5 4s linear infinite;
    }

    .layer-6 {
        transform: rotateX(90deg) rotateY(0deg) translateZ(5px);
        animation: orbit6 3.8s linear infinite;
    }

    .layer-7 {
        transform: rotateX(0deg) rotateY(90deg) translateZ(-5px);
        animation: orbit7 3.2s linear infinite;
    }

    @keyframes orbit1 {
        from {
            transform: rotateX(0deg) rotateY(0deg) translateZ(2px);
        }
        to {
            transform: rotateX(360deg) rotateY(360deg) translateZ(2px);
        }
    }

    @keyframes orbit2 {
        from {
            transform: rotateX(60deg) rotateY(0deg) translateZ(3px);
        }
        to {
            transform: rotateX(60deg) rotateY(360deg) translateZ(3px);
        }
    }

    @keyframes orbit3 {
        from {
            transform: rotateX(-60deg) rotateY(0deg) translateZ(-3px);
        }
        to {
            transform: rotateX(-60deg) rotateY(360deg) translateZ(-3px);
        }
    }

    @keyframes orbit4 {
        from {
            transform: rotateX(30deg) rotateY(0deg) translateZ(4px);
        }
        to {
            transform: rotateX(30deg) rotateY(360deg) translateZ(4px);
        }
    }

    @keyframes orbit5 {
        from {
            transform: rotateX(-30deg) rotateY(0deg) translateZ(-4px);
        }
        to {
            transform: rotateX(-30deg) rotateY(360deg) translateZ(-4px);
        }
    }

    @keyframes orbit6 {
        from {
            transform: rotateX(90deg) rotateY(0deg) translateZ(5px);
        }
        to {
            transform: rotateX(90deg) rotateY(360deg) translateZ(5px);
        }
    }

    @keyframes orbit7 {
        from {
            transform: rotateX(0deg) rotateY(0deg) translateZ(-5px);
        }
        to {
            transform: rotateX(0deg) rotateY(360deg) translateZ(-5px);
        }
    }

    /* SECOND PART */
    .line {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 0.2vh;
        background-color: #6464ff26;
        opacity: 0;
        animation: showLine ease-in-out 4s forwards;
        position: relative;
    }

    @keyframes showLine {
        0% {
            background-color: #6464ff26;
            opacity: 0;
        }
        20% {
            opacity: 1;
        }
        80% {
            height: 0.4vh;
            opacity: 1;
        }
        100% {
            height: 0.2vh;
            background-color: transparent;
            opacity: 0;
        }
    }

    .circle {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 4vw;
        height: 4vw;
        background: radial-gradient(circle, #3b3b9a, #1e1e2f);
        border-radius: 50%;
        transform: translate(-50%, -50%);
        z-index: 100;
        animation: explode 1.5s ease-out forwards;
        opacity: 0.9;
        box-shadow:
            0 0 2vw 0.5vw #3b3b9a,
            0 0 3vw 1vw rgba(255, 0, 0, 0.3),
            0 0 6vw 2vw rgba(0, 0, 255, 0.2);
    }

    @keyframes explode {
        0% {
            transform: translate(-50%, -50%) scale(0.3);
            opacity: 0.7;
            box-shadow:
                0 0 1vw 0.2vw #1c1c5a,
                0 0 2vw 0.5vw #ff000033;
        }

        50% {
            transform: translate(-50%, -50%) scale(2.5);
            opacity: 1;
            box-shadow:
                0 0 3vw 1vw #353577,
                0 0 6vw 2vw #ff000088,
                0 0 10vw 3vw rgba(0, 0, 255, 0.3);
        }

        100% {
            transform: translate(-50%, -50%) scale(3.5);
            opacity: 0;
            box-shadow:
                0 0 6vw 3vw #00004000,
                0 0 12vw 4vw rgba(255, 0, 0, 0),
                0 0 18vw 6vw rgba(0, 0, 255, 0);
        }
    }
</style>
