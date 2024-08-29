<script>
	import { Icons } from '$lib/components/icons';
	import { formatDistanceToNow } from 'date-fns';
	// @ts-ignore
	import { afterUpdate, onMount } from 'svelte';

	let chatMessages = [
		{
			author: 'Obi-Wan Koredor',
			message: 'Hello, how can I help you today, my padawan?',
			timeSent: new Date(),
			role: 'admin'
		}
	];

	const jediPhrases = [
		'Do, or do not. There is no try.',
		'The Force will be with you. Always.',
		'I am a Jedi, like my father before me.',
		'Your focus determines your reality.',
		'The Jedi are keepers of the peace, not soldiers.',
		'Fear is the path to the dark side.',
		'In my experience, there is no such thing as luck.',
		'Patience you must have, my young Padawan.',
		'Trust in the Force.',
		'A Jedi uses the Force for knowledge and defense, never for attack.',
		'Train yourself to let go of everything you fear to lose.',
		'Wars not make one great.',
		'Adventure. Excitement. A Jedi craves not these things.',
		'Clear your mind of questions.',
		'Much to learn you still have.',
		'May the Force be with you.',
		'The ability to speak does not make you intelligent.',
		'Many of the truths we cling to depend greatly on our own point of view.',
		'Control, control, you must learn control!',
		'Size matters not. Look at me. Judge me by my size, do you?'
	];

	let isOpen = false;
	let customerMessage = '';

	/**
	 * @type {HTMLDivElement}
	 */
	let chatContainer;

	let isInit = false;

	function toggleChat() {
		isOpen = !isOpen;

		if (!isInit) {
			isInit = true;

			pickRandomPhrase(); // Pick an initial phrase
			const interval = setInterval(pickRandomPhrase, 10000); // Run every 3 seconds

			return () => clearInterval(interval); // Cleanup the interval on component destroy
		}
	}

	function sendMessage() {
		if (customerMessage.trim() === '') return; // Prevent sending empty messages

		chatMessages = [
			...chatMessages,
			{
				author: 'You',
				message: customerMessage,
				timeSent: new Date(),
				role: 'customer'
			}
		];

		customerMessage = '';
		scrollToBottom();
	}

	// @ts-ignore
	function handleKeyDown(event) {
		if (event.key === 'Enter') {
			sendMessage();
		}
	}

	// Scroll to the bottom of the chat container whenever a new message is added
	function scrollToBottom() {
		if (chatContainer) {
			chatContainer.scrollTop = chatContainer.scrollHeight;
		}
	}

	// Function to randomly pick a phrase
	function pickRandomPhrase() {
		const randomIndex = Math.floor(Math.random() * jediPhrases.length);
		const currentPhrase = jediPhrases[randomIndex];

		console.log(currentPhrase);

		chatMessages = [
			...chatMessages,
			{
				author: 'Obi-Wan Koredor',
				message: currentPhrase,
				timeSent: new Date(),
				role: 'admin'
			}
		];

		scrollToBottom();
	}
</script>

<!-- Chat Window -->
<div class="fixed bottom-4 right-4">
	<!-- Chat Toggle Button -->
	{#if !isOpen}
		<button
			class="p-4 text-white transition transform rounded-full shadow-lg bg-primary hover:scale-110 hover:bg-secondary"
			on:click={toggleChat}
			aria-label="Toggle Chat"
		>
			<Icons.messagesSquare />
		</button>
	{/if}

	{#if isOpen}
		<div class="max-w-full p-4 mt-2 bg-white rounded-lg shadow-lg w-96">
			<div class="flex items-center justify-between mb-2">
				<h3 class="text-lg font-semibold">Chat with Us</h3>
				<button on:click={toggleChat} aria-label="Close Chat">
					<Icons.circleX />
				</button>
			</div>
			<!-- Bind the chat container to chatContainer for scrolling -->
			<div class="my-2 space-y-2 overflow-y-auto border-t border-b h-96" bind:this={chatContainer}>
				{#each chatMessages as message}
					<div class="chat {message.role === 'admin' ? 'chat-start' : 'chat-end'}">
						<div class="chat-header">
							{message.author}
							<time class="text-xs opacity-50"
								>{formatDistanceToNow(message.timeSent, {
									addSuffix: true,
									includeSeconds: true
								})}</time
							>
						</div>
						<div
							class="chat-bubble {message.role === 'admin'
								? 'chat-bubble-primary'
								: 'chat-bubble-info'}"
						>
							{message.message}
						</div>
					</div>
				{/each}
			</div>
			<div class="flex items-center mt-2">
				<input
					type="text"
					placeholder="Type a message..."
					class="w-full input input-bordered"
					bind:value={customerMessage}
					on:keydown={handleKeyDown}
				/>
				<button
					class="p-2 ml-2 text-white transition rounded-full bg-primary hover:bg-secondary"
					on:click={sendMessage}
					aria-label="Send Message"
					disabled={customerMessage.trim() === ''}
				>
					<Icons.send />
				</button>
			</div>
		</div>
	{/if}
</div>
