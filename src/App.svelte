<script>
  import { state } from "../stores/stateStore";
  import { onMount } from "svelte";
  import Dashboard from "./Dashboard.svelte";
  import LogoAnim from "./LogoAnim.svelte";
  import Stack from "./Stack.svelte";
  import Skills from "./Skills.svelte";
  import EasterEgg from "./EasterEgg.svelte";

  // css
  import "./global.css";

  onMount(() => {
    console.log("start");
    state.set("intro");

    // Après 2 secondes, changer le state vers "board"
    setTimeout(() => {
      state.set("board");
    }, 5000);
  });

  // Debugging pour voir les changements de state
  $: {
    console.log("State changed:", $state);
  }
</script>

<main class="main">
  {#if $state === "intro"}
    <LogoAnim />
  {:else if $state === "board"}
    <Dashboard />
  {:else if $state === "stack"}
    <Stack />
  {:else if $state === "competences"}
    <Skills />
  {:else if $state === "egg"}
    <EasterEgg />
  {/if}
</main>
