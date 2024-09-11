<script>
	import { Icons } from '$lib/components/icons/index.js';
import Seo from '$lib/components/seo.svelte';

	export let data;

	let query = '';
	let searchResults = [];
	let isLoading = false;

	$: originalFaqData = data.faqData;
	$: faqData = query.trim() ? searchResults : originalFaqData;
	$: accordionStates = faqData.map(() => false);

	function toggleAccordion(index) {
		accordionStates[index] = !accordionStates[index];
		accordionStates = [...accordionStates]; // Trigger reactivity
	}

	async function handleSearch() {
		if (!query.trim()) {
			searchResults = [];
			return;
		}

		isLoading = true;
		try {
			const response = await fetch('/api/search-faq', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ query })
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
	}
</script>

<Seo
	title="What is Koredor and Koredor Products | FAQs"
	description="Get your oredor and Koredor Products questions answered. Find answers to common questions, like Is Koredor an investor that directly provides the funds? Who provides funding to my business?"
/>

<div class="flex items-center justify-center p-10 bg-base-200">
	<div class="container">
		<h1 class="pt-16 text-5xl font-bold text-center text-primary">
			Koredor frequently asked questions
		</h1>
		<p class="pt-5 text-lg text-center">
			Find answers to commonly asked questions about Koredor and its products
		</p>
	</div>
</div>
<div class="flex items-center justify-center px-5 py-10">
	<div class="container">
		<p>
			You may browse and read questions and answers related to Koredor, but if you want to post a
			question, you can use our contact us form.
		</p>
		<p>
			<a href="/contact-us" class="btn btn-link">Contact Us form.</a>
		</p>

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
						<p>{item.answer}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
