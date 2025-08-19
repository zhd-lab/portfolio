<script>
	import { tick } from "svelte";

	let userInput = "";
	let messages = [];
	let messagesContainer;

	const knowledgeBase = [
		{
			keywords: ["bonjour", "salut", "hello"],
			response: "Bonjour ! Comment puis-je vous aider ?"
		},
		{
			keywords: ["temps", "météo"],
			response: "Je ne peux pas accéder à la météo en ce moment, désolé."
		},
		{
			keywords: ["aide", "support"],
			response: "Bien sûr, je suis là pour vous aider. Posez votre question !"
		},
		{
			keywords: ["bye", "au revoir"],
			response: "Au revoir ! N'hésitez pas à revenir si vous avez d'autres questions."
		}
	];

	async function handleSend() {
		if (!userInput.trim()) return;

		messages = [...messages, { from: "user", text: userInput }];

		const words = userInput.toLowerCase().split(/\s+/);
		let matched = null;

		for (const entry of knowledgeBase) {
			if (entry.keywords.some(keyword => words.includes(keyword))) {
				matched = entry.response;
				break;
			}
		}

		messages = [...messages, {
			from: "bot",
			text: matched || "Désolé, je n'ai pas compris. Pouvez-vous reformuler ?"
		}];

		userInput = "";

		await tick();
		messagesContainer.scrollTop = messagesContainer.scrollHeight;
	}
</script>

<main class="chat-container">
	<h2 style="text-align: center;">AI Bot</h2>
	<div class="messages" bind:this={messagesContainer}>
		{#each messages as msg (msg)}
			<div class={`message ${msg.from}`}>{msg.text}</div>
		{/each}
	</div>
	<div class="input-area">
		<input
			bind:value={userInput}
			on:keydown={(e) => e.key === "Enter" && handleSend()}
			placeholder="Écrivez votre message..."
		/>
		<button on:click={handleSend}>Envoyer</button>
	</div>
</main>

<style>
	.chat-container {
		width: 40vw;
        height: 72vh;
		margin: 2rem auto;
		padding: 1rem;
		border-radius: 2vh;
		font-family: sans-serif;
		background-color: inherit;
        animation: chatBoxAnim 2s ease-in forwards;
	}

    @keyframes chatBoxAnim {
        0% {
            opacity: 0;
            margin-top: -80vh;
        }
        100% {
            opacity: 1;
            margin-top: 0vh;
        }
    }

	.messages {
		height: 58vh;
		overflow-y: auto;
		border-radius: 6px;
		padding: 0.5rem;
        color: black;
		background: #e7e3e37a;
        animation-delay: 4s;
        animation: chatBoxAnim 2s ease-in-out forwards;
	}

	.message {
		margin: 0.5rem 0;
		padding: 0.5rem 0.75rem;
		border-radius: 5px;
		width: 60%;
		word-wrap: break-word;
        animation: chatBoxAnim 2s ease-in-out forwards;
	}

	.message.user {
		background-color: #d1e7dd;
		text-align: right;
		margin-left: auto;
	}

	.message.bot {
		background-color: #e2e3e5;
		text-align: left;
		margin-right: auto;
	}

	.input-area {
		display: flex;
		gap: 0.5rem;
		margin-top: 1rem;
	}

	input {
		flex-grow: 1;
		padding: 0.5rem;
		border-radius: 4px;
		border: 1px solid #ccc;
	}

	button {
		padding: 0.5rem 1rem;
		border: none;
		background-color: #007bff;
		color: white;
		border-radius: 4px;
		cursor: pointer;
	}

	button:hover {
		background-color: #0056b3;
	}
</style>
