<script>
    import { Alert, Card } from "sveltestrap";

    let alertStyle =
        "border: solid #e7dddd 0.2vh; background-color: #47665088; color: #e7dddd; height: 4vh; border-radius: 1vh; margin: 1vh;";
</script>

<div class="box">
    <div
        style="max-width: 50vw; max-height: 100%; padding: 0.5vh; background-color: inherit"
    >
        <div style={alertStyle}>test</div>
        <div style={alertStyle}>test</div>
        <div style={alertStyle}>test</div>
        <div style={alertStyle}>test</div>
        <div style={alertStyle}>test</div>
    </div>
</div>

<style>
    .box {
        color: #709473;
    }
</style>
