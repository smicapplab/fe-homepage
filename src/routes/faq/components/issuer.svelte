<script>
	import { Icons } from '$lib/components/icons/index.js';
	
	export let data;

	let query = '';
	/**
	 * @type {any[]}
	 */
	let searchResults = [];
	let isLoading = false;

	$: originalFaqData = data;
	$: faqData = query.trim() ? searchResults : originalFaqData;
	$: accordionStates = faqData.map(() => false);

	/**
	 * @param {number} index
	 */
	const toggleAccordion = (index) => {
		accordionStates[index] = !accordionStates[index];
		accordionStates = [...accordionStates]; // Trigger reactivity
	};

	const handleSearch = async () => {
		if (!query.trim()) {
			searchResults = [];
			return;
		}

		isLoading = true;
		try {
			const response = await fetch('/api/search-faq', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ query, type: 'issuer' })
			});

			if (response.ok) {
				searchResults = await response.json();
			} else {
				console.error('Search failed');
				searchResults = [];
			}
		} catch (error) {
			console.error('Error during search:', error);
			searchResults = [];
		} finally {
			isLoading = false;
		}
	};

</script>

<div>
	<div class="w-full mt-10 join">
		<input
			class="w-full max-w-lg input join-item input-bordered"
			type="text"
			bind:value={query}
			placeholder="Enter your question"
			on:input={handleSearch}
		/>
		<button class="btn btn-primary join-item" on:click={handleSearch} disabled={isLoading}>
			{isLoading ? 'Searching...' : 'Search'}
			<Icons.search />
		</button>
	</div>

	<div class="w-full pt-5 join join-vertical">
		{#each faqData as item, index}
			<div
				class="collapse join-item collapse-arrow border border-base-300 {accordionStates[index]
					? 'collapse-open'
					: ''}"
			>
				<input
					type="checkbox"
					checked={accordionStates[index]}
					on:change={() => toggleAccordion(index)}
				/>
				<div class="text-xl font-medium collapse-title">
					{item.question}
				</div>
				<div class="collapse-content">
					<p>{@html item.answer}</p>
				</div>
			</div>
		{/each}
	</div>
</div>
