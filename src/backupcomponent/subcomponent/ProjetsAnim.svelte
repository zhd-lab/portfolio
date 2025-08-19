<script>
</script>

<div class="container">
    <div class="box_left">DE</div>
    <div class="box_right">MO</div>
</div>

<style>
    .container {
        display: flex;
        margin-top: 10vh;
        width: 20vh; /* Augmenté pour voir les divs */
        gap: 0vh;
        overflow: hidden; /* Empêche les scrolls lors de l'animation */
    }

    .box_left {
        border-top-left-radius: 0.8vh;
        border-bottom-left-radius: 0.8vh;
        border: solid 0.4vh #e0dfda;
        border-right: none;
        flex: 1;
        animation: left-in 1.5s forwards ease-out;
    }

    .box_right {
        border-top-right-radius: 0.8vh;
        border-bottom-right-radius: 0.8vh;
        border: solid 0.4vh #e0dfda;
        border-left: none;
        flex: 1;
        animation: right-in 1.5s forwards ease-out;
    }

    @keyframes left-in {
        from {
            transform: translateX(-100%);
        }
        to {
            transform: translateX(0);
        }
    }

    @keyframes right-in {
        from {
            transform: translateX(100%);
        }
        to {
            transform: translateX(0);
        }
    }
</style>
