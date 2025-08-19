<script>
    import { onMount } from "svelte";

    let isBigCubeVisible = true;
    let isSmallCubeSpinning = true;

    onMount(() => {
        setTimeout(() => {
            isBigCubeVisible = false;
        }, 3000);

        setTimeout(() => {
            isSmallCubeSpinning = false;
        }, 5000);
    });
</script>

<section class="container">
    {#if isBigCubeVisible}
        <div class="cube big dispawn">
            <div class="face front"></div>
            <div class="face back"></div>
            <div class="face left"></div>
            <div class="face right"></div>
            <div class="face top"></div>
            <div class="face bottom"></div>
        </div>
    {/if}

    <div class="cube small" class:stop-spin={!isSmallCubeSpinning}>
        <div class="face front"></div>
        <div class="face back"></div>
        <div class="face left"></div>
        <div class="face right"></div>
        <div class="face top"></div>
        <div class="face bottom"></div>
    </div>
</section>

<style>
    :root {
        /* écart entre les faces */
        --space: 0vh;
    }

    @keyframes big-cube-spin {
        0% {
            transform: rotateY(0deg) rotateX(0deg);
        }
        50% {
            transform: rotateY(360deg) rotateX(-360deg);
        }
        100% {
            transform: rotateY(0deg) rotateX(0deg);
        }
    }

    @keyframes small-cube-spin {
        0% {
            transform: rotateY(0deg) rotateZ(0deg);
        }
        50% {
            transform: rotateY(-360deg) rotateZ(360deg);
        }
        100% {
            transform: rotateY(0deg) rotateZ(0deg);
        }
    }

    .cube {
        display: flex;
        justify-content: center;
        place-items: center;
        position: relative;
        pointer-events: none;
        perspective: 6000px;
        transform-style: preserve-3d;
    }

    .cube.big {
        animation: big-cube-spin 4s ease infinite;
    }

    .cube.small {
        scale: 0.4;
        animation: small-cube-spin 8s linear infinite;
        transition: 1s;
        pointer-events: auto;
    }

    .cube.small.stop-spin {
        animation: none; /* Arrête l'animation du petit cube */
    }

    .cube.small:hover {
        scale: 0.6;
        transition: 1s ease-in-out;
    }

    .face {
        width: 10vh;
        height: 10vh;
        position: absolute;
        border: 0.2vh solid #1c2722ad;
        border-radius: 0.2vh;
    }

    .small > .face {
        background-color: rgba(0, 0, 0, 0.1);
    }

    .face.front {
        transform: translateZ(var(--space));
    }

    .face.back {
        transform: rotateX(-180deg) translateZ(var(--space));
    }

    .face.left {
        transform: rotateY(-90deg) translateZ(var(--space));
    }

    .face.right {
        transform: rotateY(90deg) translateZ(var(--space));
    }

    .face.top {
        transform: rotateX(90deg) translateZ(var(--space));
    }

    .face.bottom {
        transform: rotateX(-90deg) translateZ(var(--space));
    }

    /* dispawn */
    .dispawn {
        animation: dispawn-big 2s linear forwards;
        animation-delay: 2s;
    }

    @keyframes dispawn-big {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }
</style>
