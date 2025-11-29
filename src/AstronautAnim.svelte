<script>
    import { Button, Card } from "sveltestrap";
    import { onMount } from "svelte";

    let animationState = false;
    let style = "width: 20vw; height: 20vh;";

    onMount(() => {
        const timeoutId = setTimeout(() => {
            animationState = true;
        }, 20000);

        return () => {
            clearTimeout(timeoutId);
        };
    });

</script>

{#if !animationState}
    <div class="box">
        <svg
            class="astronaute"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Astronaute"
            role="img"
        >
            <!-- Casque -->
            <circle
                cx="32"
                cy="20"
                r="12"
                stroke="#ccc"
                stroke-width="2"
                fill="#eee"
            />

            <!-- Corps -->
            <rect
                x="24"
                y="30"
                width="16"
                height="24"
                rx="6"
                ry="6"
                fill="#789"
            />

            <!-- Bras gauche -->
            <rect
                x="14"
                y="30"
                width="10"
                height="6"
                rx="3"
                ry="3"
                fill="#789"
            />

            <!-- Bras droit -->
            <rect
                x="40"
                y="30"
                width="10"
                height="6"
                rx="3"
                ry="3"
                fill="#789"
            />

            <!-- Jambes -->
            <rect
                x="24"
                y="54"
                width="6"
                height="8"
                rx="3"
                ry="3"
                fill="#567"
            />
            <rect
                x="34"
                y="54"
                width="6"
                height="8"
                rx="3"
                ry="3"
                fill="#567"
            />
        </svg>
    </div>
{:else}
    <div class="box-infinite backdrop">
        <div class="backdrop-layer"></div>
        <div class="content">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <Card style={style}>
                            <Button color="dark">Back</Button>
                        </Card>
                    </div>
                    <div class="col">
                        <Card style={style}>
                            <Button color="dark">Back</Button>
                        </Card>
                    </div>
                    <div class="col">
                        <Card style={style}>
                            <Button color="dark">Back</Button>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    </div>
{/if}

<style>
    .box {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        animation: boxSpawn 4s ease-in-out forwards;
        height: 100vh;
    }

    .box-infinite {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        animation: boxInfSpawn 1s ease-in-out forwards;
        height: 100vh;
        min-width: 100vw;
    }

    @keyframes boxInfSpawn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    @keyframes boxSpawn {
        0% {
            opacity: 0.6;
            margin-top: -40vh;
            margin-left: -100vh;
        }
        50% {
            opacity: 0.8;
            margin-top: 100vh;
            margin-left: -80vh;
        }
        100% {
            margin-top: 0vh;
            margin-left: 0vh;
        }
    }

    .astronaute {
        width: 10vw;
        max-width: 8rem;
        height: auto;
        animation: float 4s ease-in-out infinite;
        will-change: transform;
    }

    @keyframes float {
        0% {
            rotate: 10deg;
        }
        100% {
            rotate: 10deg;
            transform: translateY(0);
        }
        50% {
            rotate: 30deg;
            transform: translateY(-2vh);
        }
    }

    .backdrop {
        position: relative;
        overflow: hidden;
    }

    .backdrop-layer {
        position: absolute;
        inset: 0;
        backdrop-filter: blur(0.2rem);
        background-color: rgba(
            255,
            255,
            255,
            0.2
        ); /* optional: a frosted glass effect */
        z-index: 0;
    }

    .content {
        position: relative;
        z-index: 1;
    }

    /* Responsive adjustments */
    @media (max-width: 600px) {
        .astronaute {
            width: 20vw;
            max-width: 10rem;
        }
    }
</style>
