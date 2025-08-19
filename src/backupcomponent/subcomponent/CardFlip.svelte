<script>
	import { writable } from 'svelte/store';
    import BigButton from './BigButton.svelte';
	let flipped = writable(false);
</script>

<div class="container">
	<button class="card" class:flipped={$flipped} on:click={() => flipped.set(!$flipped)}>
		<div class="front">
			<span class="symbol">♠</span>
		</div>
		<div class="back">
			<div class="pattern">
				<span class="back-text">
                    <BigButton />
                </span>
			</div>
		</div>
	</button>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		gap: 1em;
		height: 100vh;
		align-items: center;
		justify-content: center;
		perspective: 100vh;
	}

	.card {
		position: relative;
		aspect-ratio: 2.5 / 3.5;
		height: 160em;
		font-size: min(1vh, 0.25rem);
		background: var(--bg-1);
		border-radius: 2em;
		transform: rotateY(180deg);
		transition: transform 0.4s;
		transform-style: preserve-3d;
		padding: 0;
		user-select: none;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.card.flipped {
		transform: rotateY(0);
	}

	.front, .back {
		display: flex;
		align-items: center;
		justify-content: center;
		position: absolute;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
		backface-visibility: hidden;
		border-radius: 2em;
		border: 1px solid var(--fg-2);
		box-sizing: border-box;
		padding: 2em;
	}

	.front {
		background: url(./svelte-logo.svg) no-repeat 5em 5em, url(./svelte-logo.svg) no-repeat calc(100% - 5em) calc(100% - 5em);
		background-size: 8em 8em, 8em 8em;
	}

	.back {
		transform: rotateY(180deg);
	}

	.symbol {
		font-size: 30em;
		color: var(--fg-1);
	}

	.pattern {
		width: 100%;
		height: 100%;
		background-color: rgba(85, 80, 80, 0.507);
		background-image:
		radial-gradient(var(--bg-3) 0.9em, transparent 1em),
		repeating-radial-gradient(var(--bg-3) 0, var(--bg-3) 0.4em, transparent 0.5em, transparent 2em, var(--bg-3) 2.1em, var(--bg-3) 2.5em, transparent 2.6em, transparent 5em);
		background-size: 3em 3em, 9em 9em;
		background-position: 0 0;
		border-radius: 1em;
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.back-text {
		position: relative;
		color: white;
		font-size: 10em;
		font-weight: bold;
		text-align: center;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
	}
</style>
