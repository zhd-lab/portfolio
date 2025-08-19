<script>
    import { onMount } from "svelte";
    let position = 0;
    let walking = true;
    let reachedDoor = false;

    onMount(() => {
        const interval = setInterval(() => {
            if (position < 350) {
                // Avancer jusqu'à la porte
                position += 3;
            } else {
                walking = false;
                reachedDoor = true;
                clearInterval(interval);
            }
        }, 17);
    });
</script>

<div class="scene">
    <div
        class="character-top {walking ? 'walking-top' : ''}"
        style="left: {position}px;"
    ></div>
    <div
        class="character-bottom {walking ? 'walking-bottom' : ''}"
        style="left: {position}px;"
    ></div>
    <div class="door {reachedDoor ? 'open' : ''}"></div>
</div>

<style>
    .scene {
        width: 30vw;
        height: 20vh;
        background-color: inherit;
        position: relative;
        overflow: hidden;
    }

    .character-top {
        width: 5vh;
        height: 6vh;
        background-color: black;
        position: absolute;
        bottom: 6vh;
        transition: transform 0.1s;
        border-top: solid 0.2vh black;
        border-left: solid 0.8vh black;
        border-right: solid 0.8vh black;
        border-bottom-right-radius: 0.2vh;
        border-bottom-left-radius: 0.2vh;
    }
    .character-bottom {
        width: 5vh;
        height: 6vh;
        background-color: inherit;
        position: absolute;
        bottom: 0;
        transition: transform 0.1s;
        border-top: solid 0.2vh black;
        border-left: solid 0.4vh black;
        border-right: solid 0.4vh black;
    }

    .walking-top {
        animation: walk-cycle-top 0.4s infinite alternate;
    }
    @keyframes walk-cycle-top {
        from {
            transform: translateY(0) rotate(-4deg);
        }
        to {
            transform: translateY(2vh) rotate(4deg);
        }
    }

    .walking-bottom {
        animation: walk-cycle-bottom 0.4s infinite alternate;
    }
    @keyframes walk-cycle-bottom {
        from {
            transform: translateY(0) rotate(-4deg);
        }
        to {
            transform: translateY(2vh) rotate(4deg);
        }
    }

    .door {
        width: 4.5vw;
        height: 12vh;
        background-color: rgb(52, 116, 89);
        position: absolute;
        right: 10px;
        bottom: 0;
        border: solid 2px black;
        transition: transform 0.5s ease-in-out;
    }
    .door.open {
        transform: rotateY(90deg);
    }
</style>
