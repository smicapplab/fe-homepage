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
	<div class="container p-4 mx-auto">
		<div class="grid grid-cols-1 gap-5 lg:grid-cols-2">
			<div>
				<h2 class="text-xl font-bold text-center text-secondary lg:text-left lg:text-2xl">
					What documents are needed?
				</h2>
				<h2 class="py-3 text-xl">
					To speed up your application process, please have the following documents ready when you
					register.
				</h2>
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
