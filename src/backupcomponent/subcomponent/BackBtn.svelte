<script>
    import { state } from "../../stores/stateStore";
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="btn-back" on:click={() => state.set('menu')}>
    <span>retour</span>
</div>

<style>
    .btn-back {
        margin-top: 2vh;
        margin-left: 1vh;
        border: solid 0.3vh #9ea5a065;
        padding: 1vh 2vh;
        width: auto;
        max-width: max-content;
        display: inline-block;
        background-color: transparent;
        white-space: nowrap;
        border-radius: 1vh;
        font-weight: bold;
        font-size: 1.7vh;
        color: #9ea5a0;
        position: relative;
        overflow: hidden;
        transition: color 2s ease-in-out, border-color 0.5s ease-in-out;
    }

    /* Élément pour l'effet de remplissage */
    .btn-back::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        width: 0%;
        height: 0%;
        background: #223b298a;
        transition: width 1.3s ease-in-out, height 1.3s ease-in-out, transform 1.3s ease-in-out, opacity ease-in-out 1.3s;
        border-radius: 50%;
        transform: translate(-50%, -50%);
        z-index: 0;
    }

    /* Changement au hover */
    .btn-back:hover {
        color: white;
        border-color: #9ea5a0;
        cursor: pointer;
    }

    .btn-back:hover::after {
        width: 300%;
        height: 300%;
    }

    /* Garde le texte au premier plan */
    .btn-back span {
        position: relative;
        z-index: 1;
    }
</style>
