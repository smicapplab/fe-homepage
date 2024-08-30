<script>
	import { Icons } from '$lib/components/icons';

	/**
	 * @type {any[]}
	 */
	export let whyItems = [];
	export let title = '';
	export let description = '';
</script>

<div
	class="relative flex items-center justify-center overflow-hidden bg-secondary bg-[linear-gradient(to_right,#6966662e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"
>
	<div class="container relative z-10 p-5">
		<h2 class="text-center text-2xl font-bold text-primary lg:text-4xl">
			{title}
		</h2>
		<p class="py-6 text-xl text-white">
			{description}
		</p>
		<div class="grid grid-cols-1 gap-10 py-10 lg:grid-cols-3">
			{#each whyItems as items}
				<div
					class="relative w-full border-t border-white pt-4 text-white first:border-t-0 lg:border-l lg:border-t-0 lg:border-white lg:pl-4 lg:pt-0 lg:first:border-l-0"
				>
					<h2 class="flex items-start text-lg font-bold lg:text-xl">
						<Icons.circleCheckBig class="mr-2 flex-shrink-0" />
						<span class="flex-grow">{items.subject}</span>
					</h2>
					<p class="py-3">{items.description}</p>
				</div>
			{/each}
		</div>
	</div>
</div>
