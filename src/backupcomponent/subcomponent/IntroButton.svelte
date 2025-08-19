<script>
  import { onMount } from "svelte";
  import { writable } from "svelte/store";
  import {
    black,
    white,
    greenMain,
    greenSub,
    grey,
    state,
    isFlipped,
  } from "../../stores/stateStore";
  import Shell from "../Shell.svelte";

  $: colorgreenMain = $greenMain;
  $: colorgreenSub = $greenSub;
  $: colorWhite = $white;
  $: colorBlack = $black;

  let text1 = "Bienvenue";
  let text2 = "Visiter";
  let displayText = "";
  let index = 0;
  let showSecondText = false;

  let borderColor = "#333333";
  let showBackground = false;

  function animateText() {
    if (index < text1.length) {
      displayText += text1[index];
      index++;
      setTimeout(animateText, 100);
    } else {
      setTimeout(() => {
        isFlipped.set(true);
        setTimeout(() => {
          showSecondText = true;
        }, 500);
      }, 2000);
    }
  }

  function handleClick() {
    state.set("menu");
  }

  function handleMouseOver() {
    borderColor = "#B0BEA9";
    showBackground = true;
  }

  function handleMouseOut() {
    borderColor = colorBlack;
    showBackground = false;
  }

  onMount(() => {
    animateText();
  });
</script>

<div class="component {showBackground ? 'background-visible' : ''}">
  <!-- svelte-ignore a11y-mouse-events-have-key-events -->
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div
    class="box"
    on:mouseover={handleMouseOver}
    on:mouseout={handleMouseOut}
    class:flipped={isFlipped}
  >
    <div class="front">
      <span class="text">
        <div id="btn-go" on:click={handleClick}></div>
        {#if !showSecondText}
          <Shell {isFlipped} />
        {:else}
          <Shell {isFlipped} />
        {/if}
      </span>
    </div>
  </div>
</div>

<style>
  .component {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
  }

  .component::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #071109cb;
    background-size: 70vw;
    background-repeat: no-repeat;
    background-position: center;
    opacity: 0;
    transition: opacity 2s ease-in-out;
  }

  .component.background-visible::before {
    opacity: 1;
  }

  .box {
    font-size: 2.5vh;
    border-radius: 1vh;
    cursor: pointer;
    position: relative;
    width: 60vw;
    height: 50vh;
    transform-style: preserve-3d;
    transition:
      transform 1s,
      border-color 0.3s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    overflow: hidden;
    z-index: 1;
    animation: button_dislay 4.5s ease-in forwards;
  }

  @keyframes button_dislay {
    0% {
      opacity: 0.6;
    }
    30% {
      opacity: 0.8;
    }
    100% {
      opacity: 1;
    }
  }

  .front,
  .back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
  }

  .back {
    transform: rotateY(180deg);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .flipped {
    transform: rotateY(180deg);
    background-color: #3f6d46cb !important;
  }

  .text {
    color: #e8eddf;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    white-space: nowrap;
    text-align: center;
    animation: slide-in 1.2s forwards;
  }

  @keyframes slide-in {
    0% {
      transform: translateX(220%);
    }
    100% {
      transform: translateX(0);
    }
  }

  #btn-go {
    min-width: 10%;
    min-height: 100%;
    padding-right: 1vh;
    padding-left: 1vh;
    border: none;
    background-color: #3f6147b6;
    animation: btn-spawn 7.5s forwards;
    position: relative;
    box-shadow: -2vh 0vh 30vh 1vh #475c507e;
    transition: box-shadow 1s ease-in-out;
  }

  #btn-go:hover {
    box-shadow: -20vh 20vh 80vh 100vh #2b363456;
    background-color: #5a8564;
    color: white;
    font-weight: bold;
    transition: box-shadow 1s ease-in-out;
  }

  @keyframes btn-spawn {
    0% {
      background-color: black;
      padding: 0vh;
      min-width: 0%;
      opacity: 0;
      width: 0vh;
    }
    90% {
      background-color: black;
      padding: 0vh;
      min-width: 0%;
      opacity: 0;
      width: 0;
    }
    100% {
      opacity: 1;
      width: 10%;
    }
  }
</style>
