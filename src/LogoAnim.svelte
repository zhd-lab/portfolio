<script>
  import { onMount } from "svelte";
  import { state } from "../stores/stateStore";

  let showText = false;
  let animateOut = false;

  onMount(() => {
    // Affiche les lettres immédiatement
    setTimeout(() => {
      showText = true;
    }, 0);

    // Lance l'animation de sortie après 3.5s
    setTimeout(() => {
      animateOut = true;
    }, 3500);
  });
</script>

<div class="box">
  <button class="top-left-button" on:click={() => state.set("board")}>
    Skip
  </button>

  {#if showText}
    <div class="letters">
      {#each "Hello".split("") as letter, index (letter + index)}
        <span
          class="letter {animateOut ? 'moveOut' : ''} fade-in-done"
          style="--index: {index}; --reverse-index: {4 - index}"
        >
          {letter}
        </span>
      {/each}
    </div>
  {/if}
</div>

<style>
  .top-left-button {
    position: fixed;
    top: 2vh;
    left: 2vh;
    z-index: 2;
    background-color: transparent;
    color: white;
    padding: 1vh 1.5vh;
    border: solid 0.1vh white;
    border-radius: 2vh;
    font-size: 1rem;
    cursor: pointer;
    animation: btnAnim 3.5s linear forwards;
    transition: all 0.3s ease-in-out;
  }

  .top-left-button:hover {
    background-color: rgba(0, 0, 0, 0.205);
    color: black !important;
    box-shadow: 0 0 1vh rgba(0, 0, 0, 0.507);
  }

  @keyframes btnAnim {
    0% {
      margin-top: -20vh;
      border-color: #dbd1d1;
      color: #dbd1d1;
    }
    40% {
      margin-top: 0vh;
      border-color: #dbd1d1;
      color: #dbd1d1;
    }
    100% {
      border-color: black;
      color: black;
    }
  }

  .box {
    width: 100vw;
    height: 100vh;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    font-size: 3rem;
    text-align: center;
    overflow: hidden;
  }

  .box::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 0;
    background-color: #dad4d4c9;
    animation: boxOut 2s linear forwards;
    animation-delay: 1.8s;
    z-index: 0;
  }

  .letters {
    display: flex;
    position: relative;
    z-index: 1;
    animation: updateColor 4s ease-in forwards;
  }

  @keyframes updateColor {
    0% {
      background-color: black;
      opacity: 0;
      margin-top: 5vh;
    }
    80% {
      border-radius: 4vh;
      padding: 2vh;
      background-color: rgba(0, 0, 0, 0.288);
      margin-top: 0vh;
      opacity: 1;
    }
    95% {
      background-color: transparent;
    }
    100% {
      background-color: transparent;
      border-radius: 4vh;
      padding: 1vh;
      opacity: 1;
      margin-top: 0vh;
      color: black;
    }
  }

  .letter {
    opacity: 0;
    animation: fadeIn 0.6s forwards;
    animation-delay: calc(var(--index) * 0.3s);
  }

  .fade-in-done {
    opacity: 1;
  }

  .moveOut {
    animation: moveOut 1s forwards;
    animation-delay: calc(var(--reverse-index) * 0.3s);
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      color: white;
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes moveOut {
    0% {
      transform: translateX(0);
      opacity: 1;
    }
    99% {
      opacity: 1;
    }
    100% {
      transform: translateX(100vw);
      opacity: 0;
    }
  }

  @keyframes boxOut {
    to {
      width: 100%;
    }
  }
</style>
