<script>
    import { Card, Badge, Button } from "sveltestrap";
    import AnimPrimary from "./AnimPrimary.svelte";
    import Navbar from "./Navbar.svelte";
    import { onMount } from "svelte";
    import { writable } from 'svelte/store';
    import { darkMode, finalState } from "../stores/stateStore";

    let isMobile = false;
    let showCards = [];

    const updateIsMobile = () => {
        isMobile = window.innerWidth <= 768;
    };

    const projects = [
        {
            img: "https://picsum.photos/150/150?random=1",
            title: "universal-encryption",
            desc: "Universal Encryption est une application Web donnant accès à un cryptage symétrique puissant et open source.",
        },
        {
            img: "https://picsum.photos/150/150?random=2",
            title: "100-news",
            desc: "100 News est une application Web affichant en temps réel les 100 derniers articles de presse publiés sur Internet",
        },
    ];

    onMount(() => {
        updateIsMobile();
        window.addEventListener("resize", updateIsMobile);

        return () => window.removeEventListener("resize", updateIsMobile);
    });

    function defineState() {
        if ($finalState === "main") {
            $finalState = writable("mainfinal");
            console.log("state update : mainfinal");
            return ("main");
        }
        return ("mainfinal");
    }
</script>

<main class={defineState()}>
    <Card
        color={$darkMode ? "dark" : "secondary"}
        style="width: 96vw; height: 96vh; margin: 2vh; overflow-y: scroll; background-color: {$darkMode
            ? '#121212'
            : '#ffffff'}; color: {$darkMode ? '#ffffff' : '#000000'};"
    >
        <!-- Navbar -->
        <div
            style="position: sticky; top: 0; z-index: 10; background-color: inherit; padding: 2vh; backdrop-filter: blur(10px);"
        >
            <Navbar />
        </div>

        <div style="padding: 2vh;">
            <!-- Projets -->
            <div
                style="display: flex; flex-wrap: wrap; gap: 10vh; justify-content: center;"
            >
                {#each projects as project, index}
                    <div class="fade-in">
                        <Card
                            color={$darkMode ? "dark" : "secondary"}
                            style="
                    display: flex;
                    flex-direction: {isMobile ? 'column' : 'row'};
                    align-items: center;
                    gap: 1.5rem;
                    padding: 1.5rem;
                    max-width: 800px;
                    background-color: {$darkMode ? '#333' : '#fff'};
                    color: {$darkMode ? '#fff' : '#000'};
                    border-radius: 1.5rem;
                    border: 2px solid {$darkMode ? '#444' : '#ccc'};
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                "
                        >
                            <div style="flex: 1; order: {isMobile ? 1 : 0};">
                                <Badge color={$darkMode ? "light" : "dark"}>{project.title}</Badge>
                                <p style="font-size: 1.5vh; margin-top: 2vh;">{project.desc}</p>
                                <div align="right">
                                    <a
                                        href="https://zhd-lab.github.io/{project.title}"
                                        target="_blank"
                                        style="text-decoration: none;"
                                    >
                                <div align="center">
                                        <Button
                                            color={$darkMode
                                                ? "secondary"
                                                : "dark"}
                                                style="font-size: 1.6vh;"
                                                >découvrir</Button
                                        >
                                </div>
                                    </a>
                                </div>
                            </div>
                        </Card>
                    </div>
                {/each}
            </div>

            <div
                class="box"
                style="margin-top: 0vh; padding: 2vh; display: flex; justify-content: center; align-items: center;"
            >
                <AnimPrimary />
            </div>
        </div>
    </Card>
</main>

<style>
    .main {
        scrollbar-width: thin;
        scrollbar-color: #888 transparent;
        animation: load 0.8s forwards;
    }

    /* final state */
    .mainfinal {
        scrollbar-width: thin;
        scrollbar-color: #888 transparent;
    }

    @keyframes load {
        0% {
            margin-left: -80vw;
        }
        100% {
            margin-left: 0vh;
        }
    }

    .fade-in {
        animation: fadeIn 8s ease-in-out;
    }

    @keyframes fadeIn {
        0% {
            margin-top: -40vh;
            opacity: 0;
        }
        80% {
            margin-top: -40vh;
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    .box {
        animation: toBottom 1s ease-in forwards;
    }
    @keyframes toBottom {
        0% {
            padding-top: 0vh;
        }
        100% {
            padding-top: 6vh;
        }
    }
</style>
