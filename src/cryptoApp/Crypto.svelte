<script>
    import {
        Button,
        Table,
        Spinner,
        Alert,
        ListGroup,
        Badge,
        Modal,
        ModalHeader,
        ModalBody,
        ModalFooter,
    } from "sveltestrap";
    import { onMount } from "svelte";
    import { scaleLinear } from "d3-scale";
    import Graph from "../../Graph.svelte";

    let cryptos = [];
    let displayedCryptos = [];
    let loading = true;
    let error = null;

    let size = "xl";
    let isModalOpen = false;
    let selectedCrypto = null;
    let chartLoading = false;
    let chartPoints = []; // Points pour le graphique
    let width = 500;
    let height = 200;
    const padding = { top: 20, right: 15, bottom: 20, left: 25 };

    let xScale, yScale, barWidth; // DÃ©claration des Ã©chelles

    onMount(async () => {
        try {
            const res = await fetch(
                "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1",
            );
            if (!res.ok) {
                throw new Error(
                    "Erreur lors de la rÃ©cupÃ©ration des donnÃ©es.",
                );
            }
            cryptos = await res.json();
            displayedCryptos = cryptos;
        } catch (err) {
            error = err.message;
        } finally {
            loading = false;
        }
    });

    async function openModal(crypto) {
        selectedCrypto = crypto;
        isModalOpen = true;
        chartLoading = true;
        chartPoints = []; // RÃ©initialiser les donnÃ©es du graphique

        try {
            const res = await fetch(
                `https://api.coingecko.com/api/v3/coins/${crypto.id}/market_chart?vs_currency=usd&days=7`,
            );
            if (!res.ok) {
                throw new Error(
                    "Erreur lors de la rÃ©cupÃ©ration des donnÃ©es du graphique.",
                );
            }
            const data = await res.json();

            // VÃ©rification des donnÃ©es de prix
            if (data.prices && data.prices.length > 0) {
                chartPoints = data.prices.map(([timestamp, price]) => ({
                    time: new Date(timestamp).toLocaleTimeString("en-US", {
                        hour: "2-digit",
                        minute: "2-digit",
                    }),
                    price,
                }));
            } else {
                chartPoints = []; // Si pas de donnÃ©es, vide le tableau
            }
        } catch (err) {
            console.error(err);
        } finally {
            chartLoading = false;
        }
    }

    function closeModal() {
        isModalOpen = false;
        selectedCrypto = null;
        chartPoints = [];
    }

    // Scales - DÃ©claration rÃ©active
    $: {
        if (chartPoints.length > 0) {
            xScale = scaleLinear()
                .domain([0, chartPoints.length - 1])
                .range([padding.left, width - padding.right]);

            yScale = scaleLinear()
                .domain([0, Math.max(...chartPoints.map((p) => p.price), 1)])
                .range([height - padding.bottom, padding.top]);

            barWidth =
                (width - padding.left - padding.right) / chartPoints.length;
        }
    }
</script>

<div class="container board">
    <div class="row">
        <div class="col-3">
            <ListGroup style="margin-top: 10vh;">
                <Button
                    on:click={() => (displayedCryptos = cryptos)}
                    color="dark"
                    style="margin-bottom: 4vh;"
                >
                    Global board
                </Button>
                <Button
                    on:click={() => (displayedCryptos = cryptos.slice(0, 10))}
                    style="margin: 0.4vh;"
                    color="success"
                >
                    Top 10 Cryptos
                </Button>
            </ListGroup>
        </div>
        <div class="col data_box">
            <h1 class="text-center my-4">Cryptos Data</h1>
            <div class="sub_data_box">
                {#if loading}
                    <div class="text-center">
                        <Spinner color="primary" size="lg" />
                        <p>Chargement des donnÃ©es...</p>
                    </div>
                {:else if error}
                    <Alert color="danger">{error}</Alert>
                {:else}
                    <Table hover>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Crypto</th>
                                <th>Symbole</th>
                                <th>Prix</th>
                                <th>Variations (24h)</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {#each displayedCryptos as crypto, index}
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{crypto.name}</td>
                                    <td>{crypto.symbol.toUpperCase()}</td>
                                    <td>${crypto.current_price.toFixed(2)}</td>
                                    <td
                                        class={crypto.price_change_percentage_24h >
                                        0
                                            ? "text-success"
                                            : "text-danger"}
                                    >
                                        {crypto.price_change_percentage_24h.toFixed(
                                            2,
                                        )}%
                                    </td>
                                    <td>
                                        <Button
                                            outline
                                            color="primary"
                                            size="sm"
                                            on:click={() => openModal(crypto)}
                                        >
                                            Graph
                                        </Button>
                                    </td>
                                </tr>
                            {/each}
                        </tbody>
                    </Table>
                {/if}
            </div>
        </div>
    </div>

    {#if isModalOpen}
        <Modal isOpen={isModalOpen} toggle={closeModal} {size}>
            <ModalHeader toggle={closeModal}>
                {selectedCrypto ? selectedCrypto.name : "DÃ©tails"}
            </ModalHeader>
            <ModalBody>
                {#if chartLoading}
                    <Spinner color="primary" />
                    <p>Chargement du graphique...</p>
                {:else if chartPoints.length}
                    <h5>Graph d'Ã©volution des prix (7 jours)</h5>
                    <div align="center">
                        <Graph />
                    </div>
                {:else}
                    <p>Pas de donnÃ©es disponibles pour ce graphique.</p>
                {/if}

                <!-- Informations sur la crypto -->
                <h4>DÃ©tails de la Crypto</h4>
                <div class="crypto-details">
                    <p><strong>Nom :</strong> {selectedCrypto.name}</p>
                    <p>
                        <strong>Symbole :</strong>
                        {selectedCrypto.symbol.toUpperCase()}
                    </p>
                    <p>
                        <strong>Prix actuel :</strong>
                        ${selectedCrypto.current_price.toFixed(2)}
                    </p>
                    <p>
                        <strong>Market Cap :</strong>
                        ${selectedCrypto.market_cap.toLocaleString()}
                    </p>
                    <p>
                        <strong>Volume total (24h) :</strong>
                        ${selectedCrypto.total_volume.toLocaleString()}
                    </p>
                    <p>
                        <strong>Variation (24h) :</strong>
                        {selectedCrypto.price_change_percentage_24h.toFixed(2)}%
                    </p>
                    <p>
                        <strong>Haute sur 24h :</strong>
                        ${selectedCrypto.high_24h.toFixed(2)}
                    </p>
                    <p>
                        <strong>Basse sur 24h :</strong>
                        ${selectedCrypto.low_24h.toFixed(2)}
                    </p>
                    <p>
                        <strong>Capitalisation boursiÃ¨re :</strong>
                        ${selectedCrypto.market_cap.toLocaleString()}
                    </p>
                    <p>
                        <strong>Circulating supply :</strong>
                        {selectedCrypto.circulating_supply.toLocaleString()}
                    </p>
                    <p>
                        <strong>Total supply :</strong>
                        {selectedCrypto.total_supply
                            ? selectedCrypto.total_supply.toLocaleString()
                            : "N/A"}
                    </p>
                    <p>
                        <strong>Max supply :</strong>
                        {selectedCrypto.max_supply
                            ? selectedCrypto.max_supply.toLocaleString()
                            : "N/A"}
                    </p>
                    <p>
                        <strong>ATH (All Time High) :</strong>
                        ${selectedCrypto.ath.toFixed(2)} ({new Date(
                            selectedCrypto.ath_date,
                        ).toLocaleDateString()})
                    </p>
                    <p>
                        <strong>ATL (All Time Low) :</strong>
                        ${selectedCrypto.atl.toFixed(2)} ({new Date(
                            selectedCrypto.atl_date,
                        ).toLocaleDateString()})
                    </p>
                </div>
            </ModalBody>

            <ModalFooter>
                <Button color="secondary" on:click={closeModal}>Fermer</Button>
            </ModalFooter>
        </Modal>
    {/if}
</div>

<style>
    .chart {
        width: 100%;
        max-width: 500px;
        margin: 0 auto;
    }

    svg {
        position: relative;
        width: 100%;
        height: 200px;
    }

    .tick {
        font-family: Helvetica, Arial;
        font-size: 0.725em;
        font-weight: 200;
    }

    .tick line {
        stroke: #e2e2e2;
        stroke-dasharray: 2;
    }

    .tick text {
        fill: #ccc;
        text-anchor: start;
    }

    .x-axis .tick text {
        text-anchor: middle;
    }

    .bars rect {
        fill: #a11;
        stroke: none;
        opacity: 0.65;
    }
</style>
