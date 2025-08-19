<script>
    import { ongletState } from "../../stores/stateStore";

    function setOnglet(state) {
        ongletState.set(state);
    }
</script>

<div class="tabs">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div
        class="tab"
        on:click={() => setOnglet("canvas")}
        class:selected={$ongletState === "canvas"}
    >
        Canvas
    </div>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div
        class="tab"
        on:click={() => setOnglet("doc")}
        class:selected={$ongletState === "doc"}
    >
        Doc
    </div>
</div>

<style>
    .tabs {
        display: inline-flex; /* Utilisation de inline-flex pour que la largeur des onglets s'ajuste automatiquement */
        cursor: pointer;
        margin-bottom: 10px;
        border: solid #223b29 0.1vh;
        border-radius: 2vh;
    }

    .tab {
        padding: 1vh 2vw; /* Ajuste le padding des onglets pour une taille correcte */
        border-radius: 1.7vh;
        transition: background-color 0.3s ease;
        margin: 0; /* Supprimer tout écart entre les onglets */
    }

    .tab.selected {
        background-color: #223b29;
        font-weight: bold;
    }

    .tab:first-child {
        border-right: 0; /* Supprime la bordure entre les deux onglets */
    }
</style>
