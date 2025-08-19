<script>
    import NavBar from "./NavBar.svelte";
    import Skills from "./Skills.svelte";
</script>

<div class="box">
    <div class="sub">
        <Skills />
    </div>
</div>

<style>
    .box {
        background-color: #223b29a6;
        height: 100vh;
        padding: 1.5vh; /* Pour que l'intérieur respecte le padding */
        display: flex; /* Pour que Skills puisse prendre toute la place */
    }

    .box > * {
        flex-grow: 1; /* Skills prendra tout l'espace restant */
    }

    .sub {
        background-color: #0C1A1A;
        border-radius: 2vh;
        border: solid #0C1A1A 0.3vh;
        color: white;
    }
</style>
