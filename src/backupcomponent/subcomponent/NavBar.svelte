<script>
  import { state } from "../../stores/stateStore";

  let isNightMode = false;

  function toggleNightMode() {
    isNightMode = !isNightMode;
    document.documentElement.classList.toggle("dark", isNightMode);
  }

  function goBack() {
    state.set("menu");
  }
</script>

<nav>
  <button class="btn" on:click={() => goBack()}>Retour</button>
  <div class="right-buttons">
    <button class="btn" on:click={() => toggleNightMode()}>Night Mode</button>
    <button class="btn">Settings</button>
  </div>
</nav>

<style>
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: var(--background-color, #f8f9fa);
    border-bottom: 1px solid #ddd;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Shadowbox noire */
  }

  .btn {
    padding: 8px 12px;
    margin: 0 5px;
    border: none;
    cursor: pointer;
    background-color: #007bff;
    color: white;
    border-radius: 4px;
  }

  .btn:hover {
    background-color: #0056b3;
  }

  .right-buttons {
    display: flex;
  }
</style>
