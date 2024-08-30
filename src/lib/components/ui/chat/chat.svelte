<script>
	import { Icons } from '$lib/components/icons';
	import IconButton from '$lib/components/icons/icon-button.svelte';
	import { formatDistanceToNow } from 'date-fns';

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

	// @ts-ignore
	let interval;

	function toggleChat() {
		isOpen = !isOpen;

		if (isOpen) {
			pickRandomPhrase();
			interval = setInterval(pickRandomPhrase, 10000);
			// @ts-ignore
			return () => clearInterval(interval);
		} else {
			// @ts-ignore
			if (interval) {
				clearInterval(interval);
				interval = null;
			}
		}
	}

	function sendMessage() {
		if (customerMessage.trim() === '') return;

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
<div class="fixed bottom-4 right-4 z-100">
	<!-- Chat Toggle Button -->
	{#if !isOpen}
		<IconButton
			icon={Icons.messagesSquare}
			on:click={toggleChat}
			name="chat-button"
			buttonClass="p-4 text-white transition transform rounded-full shadow-lg bg-primary hover:scale-110 hover:bg-secondary"
		/>
	{/if}

	{#if isOpen}
		<div class="mt-2 w-96 max-w-full rounded-lg bg-white p-4 shadow-lg">
			<div class="mb-2 flex items-center justify-between">
				<h3 class="text-lg font-semibold">Chat with Us</h3>
				<button on:click={toggleChat} aria-label="Close Chat">
					<Icons.circleX />
				</button>
			</div>
			<!-- Bind the chat container to chatContainer for scrolling -->
			<div class="my-2 h-96 space-y-2 overflow-y-auto border-b border-t" bind:this={chatContainer}>
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
			<div class="mt-2 flex items-center">
				<input
					type="text"
					placeholder="Type a message..."
					class="input input-bordered w-full"
					bind:value={customerMessage}
					on:keydown={handleKeyDown}
				/>
				<button
					class="ml-2 rounded-full bg-primary p-2 text-white transition hover:bg-secondary"
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
