<script>
    import { onMount } from "svelte";
    import { fade } from "svelte/transition";

    let isDaltonien = false;
    let isDarkMode = false;
    let showButtons = false; // Les boutons sont cachés au début

    function toggleDaltonien() {
        isDaltonien = !isDaltonien;
        document.body.classList.toggle("daltonien", isDaltonien);
    }

    function toggleDarkMode() {
        isDarkMode = !isDarkMode;
        document.body.classList.toggle("dark", isDarkMode);
    }

    onMount(() => {
        // Vérifier si le dark mode est préféré
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            toggleDarkMode();
        }

        // Afficher les boutons après 10 secondes
        setTimeout(() => {
            showButtons = true;
        }, 11000);
    });
</script>

<div class="container">
    {#if showButtons}
        <button class="btn-darkmode" on:click={toggleDarkMode} transition:fade>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="33"
                height="34"
                fill="currentColor"
            >
                <path
                    d="M12.3 2.1a9 9 0 0 0-8.4 8.4 9 9 0 0 0 11 11 9 9 0 0 0 8.4-8.4 9 9 0 0 1-11-11z"
                />
            </svg>
        </button>
        <button class="btn-darkmode" on:click={toggleDarkMode} transition:fade>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="33"
                height="34"
                fill="currentColor"
            >
                <path
                    d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zm0 13c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"
                />
            </svg>
        </button>
    {/if}
</div>

<style>
    .container {
        display: flex;
        flex-direction: row; /* Alignement horizontal */
        justify-content: center;
        align-items: center;
        gap: 1rem; /* Espacement entre les boutons */
        width: 100%;
        height: 100%;
    }

    button {
        padding: 10px 20px;
        font-size: 1rem;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background 0.3s;
    }

    .btn-daltonien {
        background: #ffcc00;
        color: black;
    }
    .btn-daltonien:hover {
        background: #e6b800;
    }

    .btn-darkmode {
        background: #333;
        color: white;
    }
    .btn-darkmode:hover {
        background: #555;
    }

    /* Mode Daltonien */
    .daltonien {
        filter: grayscale(100%);
    }

    /* Mode Nuit */
    .dark {
        background: black;
        color: white;
    }
</style>
