<script>
	import { Icons } from '$lib/components/icons';
	import { docRequirements } from './doc-requirements';

	let activeItems = new Array(docRequirements.length).fill(false);

	/**
	 * @param {number} index
	 */
	function toggleItem(index) {
		activeItems = activeItems.map((item, i) => (i === index ? !item : item));
	}
</script>

<div class="flex items-center justify-center">
	<div class="container p-5">
		<div class="container p-4 mx-auto">
			<div class="grid grid-cols-1 gap-5 lg:grid-cols-2">
				<div>
					<h2 class="text-xl font-bold text-center text-secondary lg:text-left lg:text-2xl">
						What are the documentary requirements?
					</h2>
					<h3 class="mb-5 text-center text-neutral lg:text-left">
						To fast-track your application, ensure to have the following documents with you upon
						registration.
					</h3>
				</div>
				<div>
					<div class="w-full join join-vertical">
						{#each docRequirements as docRequirement, index}
							<div
								class="collapse join-item collapse-arrow border border-base-300 {activeItems[index]
									? 'collapse-open'
									: ''}"
							>
								<button
									type="button"
									class="w-full text-xl font-medium text-left cursor-pointer collapse-title text-neutral"
									on:click={() => toggleItem(index)}
								>
									<Icons.circleCheckBig class="inline-block mr-2" />
									{docRequirement.title}
								</button>
								<div class="collapse-content">
									{#if docRequirement.description}
										<p>{docRequirement.description}</p>
									{/if}

									<ul>
										{#if docRequirement.list}
											{#each docRequirement.list as listItem}
												<li class="list-disc list-inside text-md">{listItem}</li>
											{/each}
										{/if}
									</ul>
								</div>
							</div>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
