<script>
    import { state } from "../../stores/stateStore";

    let bgstyle = "background-color: #CCC;";
    let borderCircle = "border: solid black 0.1vh;";
    let isHoveringYin = true; // Etat pour le survol de Yin
    let isHoveringYang = false; // Etat pour le survol de Yang

    function bgUpdate(target) {
        if (target === "yin") {
            bgstyle = "background-color: white;";
            borderCircle = "border: solid black 0.2vh;";
            isHoveringYin = true; // Lors du survol de Yin
            isHoveringYang = false; // Désactiver le survol de Yang
        } else if (target === "yang") {
            bgstyle = "background-color: black;";
            borderCircle = "border: solid white 0.1vh;";
            isHoveringYin = false; // Désactiver le survol de Yin
            isHoveringYang = true; // Lors du survol de Yang
        }
    }

    function bgReset() {
        bgstyle = "background-color: #CCC;";
        borderCircle = "border: solid black 0.1vh;";
        isHoveringYin = true; // Etat pour le survol de Yin
        isHoveringYang = false; // Etat pour le survol de Yang
    }
</script>

<main class="main" style={bgstyle}>
    <div class="circle" style={borderCircle}>
        <!-- svelte-ignore a11y-mouse-events-have-key-events -->
        <div
            class="yin"
            on:mouseover={() => bgUpdate("yin")}
            on:mouseleave={() => bgReset()}
        ></div>
        <!-- svelte-ignore a11y-mouse-events-have-key-events -->
        <div
            class="yang"
            on:mouseover={() => bgUpdate("yang")}
            on:mouseleave={() => bgReset()}
        ></div>

        <!-- Petit cercle noir dans la partie Yin -->
        <div
            class="p-black"
            style={isHoveringYin
                ? "width: 10vw; height: 10vw;"
                : "width: 8vw; height: 8vw;"}
        >
            {#if isHoveringYin}
                <button class="red-btn" on:click={() => state.set("dashboard")}
                    >Projets</button
                >
            {/if}
        </div>

        <!-- Petit cercle blanc dans la partie Yang -->
        <div
            class="p-white"
            style={isHoveringYang
                ? "width: 10vw; height: 10vw;"
                : "width: 8vw; height: 8vw;"}
        >
            {#if isHoveringYang}
                <button
                    class="green-btn"
                    style="border: solid red 0vh;"
                    on:click={() => state.set("board")}>Compétences</button
                >
            {/if}
        </div>
    </div>
</main>

<style>
    .main {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }

    .circle {
        width: 45vw;
        height: 45vw;
        background: black;
        border-radius: 50%;
        position: relative;
        overflow: hidden;
        transition: all 0.5s ease;
        box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
        animation: vibration 1.8s infinite alternate ease-in-out;
    }

    @keyframes vibration {
        0% {
            transform: translate(2vh, -2vh);
        }
        50% {
            transform: translate(2vh, 0vh);
        }
        100% {
            transform: translate(2vh, -2vh);
        }
    }

    /* Moitié Yin - Partie blanche */
    .yin {
        width: 100%;
        height: 50%;
        background: white;
        border-radius: 50%;
        position: absolute;
        top: 0;
        transition: all 0.5s ease; /* Transition pour un changement de taille fluide */
    }

    /* Moitié Yang - Partie noire */
    .yang {
        width: 100%;
        height: 50%;
        background: black;
        border-radius: 50%;
        position: absolute;
        bottom: 0;
        transition: all 0.5s ease; /* Transition pour un changement de taille fluide */
    }

    /* Petit cercle noir à l'intérieur de la partie blanche (Yin) */
    .p-black {
        width: 8vw; /* Taille du petit cercle noir par défaut */
        height: 8vw; /* Taille du petit cercle noir par défaut */
        background: black;
        border-radius: 50%;
        position: absolute;
        top: 25%; /* Placé au quart du cercle */
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        justify-content: center;
        align-items: center; /* Centrer le bouton à l'intérieur de ce cercle */
        padding: 0.5vh; /* Padding ajouté ici */
    }

    /* Petit cercle blanc à l'intérieur de la partie noire (Yang) */
    .p-white {
        width: clamp(6vw, 8vw, 10vw); /* Ajuste la taille selon l'écran */
    height: clamp(6vw, 8vw, 10vw);
        background: white;
        border-radius: 50%;
        position: absolute;
        bottom: 25%; /* Placé au quart du cercle */
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        justify-content: center;
        align-items: center; /* Centrer le bouton à l'intérieur de ce cercle */
        padding: 0.5vh; /* Padding ajouté ici */
    }

    /* Lorsque l'on survole la partie Yin */
    .yin:hover {
        height: 90%; /* La partie Yin prend 90% de la hauteur du cercle */
        top: 0;
    }

    /* Lorsque l'on survole la partie Yang */
    .yang:hover {
        height: 90%; /* La partie Yang prend 90% de la hauteur du cercle */
        bottom: 0;
    }

    /* Réduction de la partie opposée à 10% */
    .yin:hover + .yang {
        height: 10%; /* La partie Yang se réduit à 10% */
        bottom: 0;
    }

    .yang:hover + .yin {
        height: 10%; /* La partie Yin se réduit à 10% */
        top: 0;
    }

    /* Styles pour les boutons */
    .red-btn,
    .green-btn {
        width: 100%; /* Occupe toute la largeur du parent */
        height: 100%; /* Occupe toute la hauteur du parent */
        border: none;
        border-radius: 50%; /* Bouton circulaire */
        font-size: clamp(1rem, 2vh, 2vw); /* Taille de police adaptative */
        cursor: pointer;
        color: white;
    }

    /* Bouton Yin en haut */
    .red-btn {
        background-color: #0000005d;
    }

    /* Bouton Yang en bas */
    .green-btn {
        background-color: #000000;
    }
</style>
