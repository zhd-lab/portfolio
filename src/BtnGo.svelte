<script>
  import { onMount } from "svelte";
  import { state } from "../stores/stateStore";

  let flipped = false;

  onMount(() => {
    setTimeout(() => {
      flipped = true;
    }, 9000);
  });
</script>

<div class="container">
  <div class="flip-card {flipped ? 'flipped' : ''}">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <div class="face cross"></div>
      </div>
      <div class="face go flip-card-back">
        <div class="face cross" style="background-color: green;"></div>
      </div>
    </div>
  </div>
</div>

<style>
  .container {
    position: relative;
    height: 7vh;
    width: 4vw;
    display: flex;
    align-items: center;
    justify-content: center;
    perspective: 1000px;
  }

  .flip-card {
    width: 4vw;
    height: 7vh;
  }

  .flip-card-inner {
    position: relative;
    width: 4vw;
    height: 7vh;
    transition: transform 1s;
    transform-style: preserve-3d;
  }

  .flipped .flip-card-inner {
    transform: rotateY(180deg);
  }

  .flip-card-front,
  .flip-card-back {
    position: absolute;
    width: 4vw;
    height: 7vh;
    backface-visibility: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .flip-card-back {
    transform: rotateY(180deg);
  }

  .face {
    border: none;
    width: 4vw;
    height: 7vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3vh;
    font-weight: bold;
    color: white;
    border-radius: 1vh;
  }

  .cross {
    animation: fill-cross 6s linear forwards;
    background-color: inherit;
  }

  @keyframes fill-cross {
    0% {
      background-color: inherit;
    }
    80% {
      background-color: inherit;
    }
    100% {
      background-color: red;
    }
  }

  .cross::before,
  .cross::after {
    content: "";
    position: absolute;
    background-color: white;
  }

  .cross::before {
    width: 60%;
    height: 20%;
  }

  .cross::after {
    width: 20%;
    height: 60%;
  }

  .go {
    z-index: 90;
    border: solid grey 0.1vh;
    cursor: pointer;
    min-width: 4vw;
    color: green;
    background-color: #1c1d1c;
  }
</style>
