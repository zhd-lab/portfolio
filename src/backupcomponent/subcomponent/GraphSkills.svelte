<script>
    import { Progress } from "sveltestrap";

    let style = "margin: 0.2vh;";
    let styleHover = "margin: 0.2vh;";


</script>

<main class="box">
    <div class="sub">
        <div class="bar" style="width: 7vh;"/>
        <div class="bar" style="width: 6vh;"/>
        <div class="bar" style="width: 5vh;"/>
        <div class="bar" style="width: 8vh;"/>
        <div class="bar" style="width: 6vh;"/>
        <div class="bar" style="width: 7vh;"/>
        <div class="bar" style="width: 8vh;"/>
        <div class="bar" style="width: 6vh;"/>
        <div class="bar" style="width: 5vh;"/>
        <div class="bar" style="width: 4vh;"/>
        <div class="bar" style="width: 7vh;"/>
    </div>
</main>

<style>
    .box {
        height: 4vh;
        margin-top: 10vh;
        margin-right: 7vh;
        transform: rotate(-90deg);
    }

    .sub {
        width: 8vh;
    }

    .bar {
        height: 1vh;
        border: solid 0.1vh;
    }
</style>