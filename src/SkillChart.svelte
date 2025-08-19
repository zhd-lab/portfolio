<script>
    import { onMount } from "svelte";
    import Chart from "chart.js/auto";

    export let skill;

    let canvas;
    let chart;

    const skillDataMap = {
        HTML: [90, 85, 80, 95],
        CSS: [85, 80, 75, 90],
        JavaScript: [70, 75, 80, 85],
        C: [60, 70, 65, 75],
        Shell: [50, 60, 70, 65],
        Python: [85, 88, 90, 92],
        TypeScript: [78, 80, 83, 85],
        Svelte: [75, 80, 82, 84],
        "Node.js": [70, 72, 75, 78],
        React: [65, 68, 70, 75],
    };

    const labels = ["2021", "2022", "2023", "2024"];

    onMount(() => {
        const data = {
            labels,
            datasets: [
                {
                    label: skill,
                    data: skillDataMap[skill] || [0, 0, 0, 0],
                    borderColor: "#4bc0c0",
                    backgroundColor: "rgba(75, 192, 192, 0.2)",
                    tension: 0.4,
                },
            ],
        };

        chart = new Chart(canvas, {
            type: "line",
            data,
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        display: true,
                    },
                    title: {
                        display: true,
                        text: `Progression en ${skill}`,
                    },
                },
            },
        });

        return () => {
            chart.destroy(); // Nettoyage
        };
    });
</script>

<canvas bind:this={canvas}></canvas>
