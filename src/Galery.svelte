<script>
    import GaleryCardLine from "./GaleryCardLine.svelte";

</script>

<div class="wrapper">
    <div class="center-box">
        <GaleryCardLine />
    </div>
</div>

<style>
    .wrapper {
        width: 99vw;
        height: 92vh;
        display: flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        overflow: hidden;
    }

    .center-box {
        width: 99vw;
        height: 84vh;
        box-sizing: border-box;
        border-radius: 50vh;
        backdrop-filter: blur(20vh);
        border: 0.1vh solid grey;
        display: flex;
        align-items: center;
        justify-content: center;
        background: transparent;
        animation: growIn 2s ease-out forwards;
    }

    @keyframes growIn {
        0% {
            width: 2vh;
            height: 2vh;
            border-radius: 50vh;
            opacity: 0;
        }
        100% {
            width: 99vw;
            height: 84vh;
            border-radius: 2vh;
            opacity: 1;
        }
    }
</style>
