<script>
    import { onMount, onDestroy } from "svelte";
    import Chart from "chart.js/auto";
    import { Card } from "sveltestrap";

    export let selectedSkill;

    let canvasRef;
    let chartInstance;

    function defineColor(type) {
        return type === "framework" ? "#333333" : "#2C6E49";
    }

    async function createChart() {
        if (!canvasRef || !selectedSkill) return;
        
        if (chartInstance) {
            chartInstance.destroy();
        }

        chartInstance = new Chart(canvasRef, {
            type: "doughnut",
            data: {
                labels: [selectedSkill.name, ""],
                datasets: [
                    {
                        data: [selectedSkill.level, 100 - selectedSkill.level],
                        backgroundColor: [
                            defineColor(selectedSkill.type),
                            "#6e8dbe4d",
                        ],
                        borderWidth: 0,
                        cutout: "75%", // Doughnut effect
                    },
                ],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: { enabled: true },
                },
            },
        });
    }

    onMount(() => {
        createChart();
    });

    onDestroy(() => {
        if (chartInstance) chartInstance.destroy(); // Cleanup chart
    });

    let cardstyle = "padding: 2vh; margin: 1vh; max-width: 15vw;";
</script>

<div class="chart-container" align="center">
    <canvas bind:this={canvasRef} />

    <div style="width: 100%; padding-left: 4vh; padding-right: 4vh;">
        <Card color="light" style={cardstyle}>{selectedSkill.aspect1}</Card>
        <Card color="light" style={cardstyle}>{selectedSkill.aspect2}</Card>
        <Card color="light" style={cardstyle}>{selectedSkill.aspect3}</Card>
        <Card color="light" style={cardstyle}>{selectedSkill.aspect4}</Card>
    </div>
</div>

<style>
    .chart-container {
        width: 100%;
        height: 70%;
        display: start;
        justify-content: center;
        align-items: center;
    }

    canvas {
        margin-top: 4vh;
        margin-bottom: 10vh;
        max-width: 35vw;
        max-height: 35vh;
    }
</style>
