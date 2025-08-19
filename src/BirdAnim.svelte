<script>
    import { Badge } from "sveltestrap";
</script>

<div class="main">
    <div class="orbe-3d">
        <div class="layer layer1">
            <div class="badge-wrapper">
                <Badge color="warning">py</Badge>
            </div>
        </div>
        <div class="layer layer2">
            <div class="badge-wrapper">
                <Badge color="warning">js</Badge>
            </div>
        </div>
        <div class="layer layer3">
            <div class="badge-wrapper">
                <Badge color="secondary">html</Badge>
            </div>
        </div>
        <div class="layer layer4">
            <div class="badge-wrapper">
                <Badge color="info">css</Badge>
            </div>
        </div>
        <div class="layer layer5">
            <div class="badge-wrapper">
                <Badge color="danger">c</Badge>
            </div>
        </div>
        <div class="layer layer6">
            <div class="badge-wrapper">
                <Badge color="dark">svelte</Badge>
            </div>
        </div>
        <div class="layer layer7">
            <div class="badge-wrapper">
                <Badge color="primary">react</Badge>
            </div>
        </div>
    </div>
</div>

<style>
    .main {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40vw;
        height: 50vh;
        perspective: 1000px;
        animation: spawn 5s ease-in-out forwards;
    }

    @keyframes spawn {
        0% {
            margin-left: 150vh;
            margin-top: 100vh;
            opacity: 0;
        }
        20% {
            margin-left: 0vh;
            margin-top: 0vh;
            opacity: 1;
        }
        50% {
            margin-left: 0vh;
            margin-top: 0vh;
            opacity: 1;
        }
        100% {
            margin-left: -250vh;
            margin-top: -50vh;
            opacity: 0.2;
        }
    }

    .orbe-3d {
        position: relative;
        width: 40vh;
        height: 40vh;
        transform-style: preserve-3d;
        animation:
            spin 4s linear infinite,
            float 4s ease-in-out infinite;
    }

    @keyframes spin {
        0% {
            transform: rotateY(0deg);
        }
        100% {
            transform: rotateY(360deg);
        }
    }

    @keyframes float {
        0%,
        100% {
            transform: translateY(0) rotateY(0deg);
        }
        50% {
            transform: translateY(-10px) rotateY(180deg);
        }
    }

    .layer {
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        box-shadow: 0 0 2vh #7185e0c2;
        border: 1vh solid #28794a33;
        animation: pulse 3s ease-in-out infinite alternate;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    @keyframes pulse {
        from {
            opacity: 0.6;
            transform: scale(0.98);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }

    /* Layers + Correction de rotation des badges */

    .layer1 {
        opacity: 0.3;
        transform: rotateX(0deg) translateZ(0px);
    }
    .layer1 > * {
        transform: rotateX(0deg);
        animation: layer1 2.5s linear infinite;
    }
    @keyframes layer1 {
        0% {
            margin-top: 0vh;
        }
        50% {
            margin-top: -10vh;
        }
        100% {
            margin-top: 0vh;
        }
    }

    .layer2 {
        transform: rotateX(60deg) rotateY(45deg) translateZ(5px);
        animation: orbit1 3s linear infinite;
    }
    .layer2 > * {
        transform: rotateY(-45deg) rotateX(-60deg);
        animation: layer2 2s linear infinite;
    }
    @keyframes layer2 {
        0% {
            margin-top: 0vh;
        }
        50% {
            margin-top: -10vh;
        }
        100% {
            margin-top: 0vh;
        }
    }

    .layer3 {
        transform: rotateX(-60deg) rotateY(-45deg) translateZ(-5px);
        animation: orbit2 2.1.5s linear infinite;
    }
    .layer3 > * {
        transform: rotateY(45deg) rotateX(60deg);
        animation: layer3 3s linear infinite;
    }
    @keyframes layer3 {
        0% {
            margin-top: 0vh;
        }
        50% {
            margin-top: -10vh;
        }
        100% {
            margin-top: 0vh;
        }
    }

    .layer4 {
        transform: rotateX(30deg) rotateY(30deg) translateZ(8px);
        animation: orbit3 3.6s linear infinite;
    }
    .layer4 > * {
        transform: rotateY(-30deg) rotateX(-30deg);
        animation: layer4 3.5s linear infinite;
    }
    @keyframes layer4 {
        0% {
            margin-top: 0vh;
        }
        50% {
            margin-top: -10vh;
        }
        100% {
            margin-top: 0vh;
        }
    }

    .layer5 {
        transform: rotateX(-30deg) rotateY(60deg) translateZ(-8px);
        animation: orbit4 2.5s linear infinite;
    }
    .layer5 > * {
        transform: rotateY(-60deg) rotateX(30deg);
        animation: layer5 2.2s linear infinite;
    }
    @keyframes layer5 {
        0% {
            margin-top: 0vh;
        }
        50% {
            margin-top: -10vh;
        }
        100% {
            margin-top: 0vh;
        }
    }

    .layer6 {
        transform: rotateX(90deg) rotateY(0deg) translateZ(10px);
        animation: orbit5 1.3s linear infinite;
    }
    .layer6 > * {
        transform: rotateX(-90deg);
        animation: layer6 3s linear infinite;
    }
    @keyframes layer6 {
        0% {
            margin-top: 0vh;
        }
        50% {
            margin-top: -10vh;
        }
        100% {
            margin-top: 0vh;
        }
    }

    .layer7 {
        transform: rotateX(0deg) rotateY(90deg) translateZ(-10px);
        animation: orbit6 2s linear infinite;
    }
    .layer7 > * {
        transform: rotateY(-90deg);
        animation: layer7 1.8s linear infinite;
    }
    @keyframes layer7 {
        0% {
            margin-top: 0vh;
        }
        50% {
            margin-top: -10vh;
        }
        100% {
            margin-top: 0vh;
        }
    }

    /* Orbit animations */
    @keyframes orbit1 {
        0% {
            transform: rotateX(60deg) rotateY(0deg) translateZ(5px);
        }
        100% {
            transform: rotateX(360deg) rotateY(360deg) translateZ(5px);
        }
    }

    @keyframes orbit2 {
        0% {
            transform: rotateX(-60deg) rotateY(0deg) translateZ(-5px);
        }
        100% {
            transform: rotateX(-60deg) rotateY(360deg) translateZ(-5px);
        }
    }

    @keyframes orbit3 {
        0% {
            transform: rotateX(30deg) rotateY(0deg) translateZ(8px);
        }
        100% {
            transform: rotateX(30deg) rotateY(360deg) translateZ(8px);
        }
    }

    @keyframes orbit4 {
        0% {
            transform: rotateX(-30deg) rotateY(0deg) translateZ(-8px);
        }
        100% {
            transform: rotateX(-30deg) rotateY(360deg) translateZ(-8px);
        }
    }

    @keyframes orbit5 {
        0% {
            transform: rotateX(90deg) rotateY(0deg) translateZ(10px);
        }
        100% {
            transform: rotateX(90deg) rotateY(360deg) translateZ(10px);
        }
    }

    @keyframes orbit6 {
        0% {
            transform: rotateX(0deg) rotateY(0deg) translateZ(-10px);
        }
        100% {
            transform: rotateX(0deg) rotateY(360deg) translateZ(-10px);
        }
    }
</style>
