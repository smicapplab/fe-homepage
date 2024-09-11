<script>
	import { Icons } from '$lib/components/icons';
	import IconButton from '$lib/components/icons/icon-button.svelte';
	import { formatDistanceToNow } from 'date-fns';
	import { onMount, afterUpdate } from 'svelte';

	let chatMessages = [
		{
			author: 'Koredor Agent (Bot)',
			message: 'Hello! How can I assist you today? Feel free to ask me anything.',
			timeSent: new Date(),
			role: 'admin'
		}
	];

	let isOpen = false;
	let customerMessage = '';

	/**
	 * @type {HTMLDivElement}
	 */
	let chatContainer;
	let shouldScroll = false;

	onMount(() => {
		scrollToBottom();
	});

	afterUpdate(() => {
		if (shouldScroll) {
			scrollToBottom();
			shouldScroll = false;
		}
	});

	function toggleChat() {
		isOpen = !isOpen;
		if (isOpen) {
			shouldScroll = true;
		}
	}

	const sendMessage = async () => {
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
		shouldScroll = true;

		const response = await handleSearch(customerMessage);
		if (response && response.answer) {
			chatMessages = [
				...chatMessages,
				{
					author: 'Koredor Agent (Bot)',
					message: response.answer,
					timeSent: new Date(),
					role: 'admin'
				}
			];
			shouldScroll = true;
		}

		customerMessage = '';
	};

	/**
	 * @param {{ key: string; }} event
	 */
	function handleKeyDown(event) {
		if (event.key === 'Enter') {
			sendMessage();
		}
	}

	function scrollToBottom() {
		if (chatContainer) {
			chatContainer.scrollTop = chatContainer.scrollHeight;
		}
	}

	/**
	 * @param {string} query
	 */
	const handleSearch = async (query) => {
		if (!query || !query.trim()) {
			return null;
		}

		try {
			const response = await fetch('/api/search-faq', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ query, topOnly: true })
			});

			if (response.ok) {
				return await response.json();
			} else {
				console.error('Search failed');
				return null;
			}
		} catch (error) {
			console.error('Error during search:', error);
			return null;
		}
	};
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
		<div class="max-w-full p-4 mt-2 bg-white rounded-lg shadow-lg w-96">
			<div class="flex items-center justify-between mb-2">
				<h3 class="text-lg font-semibold">Chat with Us</h3>
				<button on:click={toggleChat} aria-label="Close Chat">
					<Icons.circleX />
				</button>
			</div>
			<div class="my-2 space-y-2 overflow-y-auto border-t border-b h-96" bind:this={chatContainer}>
				{#each chatMessages as message}
					<div class="chat {message.role === 'admin' ? 'chat-start' : 'chat-end'}">
						<div class="chat-header">
							{message.author}
							<time class="text-xs opacity-50">
								{formatDistanceToNow(message.timeSent, {
									addSuffix: true,
									includeSeconds: true
								})}
							</time>
						</div>
						<div
							class="chat-bubble {message.role === 'admin'
								? 'chat-bubble-primary'
								: 'chat-bubble-secondary'}"
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
