<script>
	import { Icons } from '$lib/components/icons';
	import { finProcessSteps } from './financing-data';
</script>

<div
	class="flex items-center justify-center bg-neutral bg-[linear-gradient(to_right,#6966662e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"
>
	<div class="container p-5">
		<h2 class="text-center text-2xl font-bold text-white">What is our financing process?</h2>
		<h2 class="py-3 text-center text-xl text-white">
			Our process is 100% online, so you can apply anytime, anywhere!
		</h2>
		<div class="container mx-auto p-4">
			<div class="timeline">
				{#each finProcessSteps as finProcessStep, index}
					<div class="timeline-item">
						<div class="timeline-icon mr-3 whitespace-nowrap">
							{#if finProcessSteps.length - 1 === index}
								<Icons.circleDot class="mr-2 inline-block" />
							{:else}
								<Icons.circleChevronRight class="mr-2 inline-block" />
							{/if}

							Step {index + 1}
						</div>
						<div class="timeline-content h-full bg-secondary text-secondary-content">
							<h3 class="text-lg font-bold">{finProcessStep.title}</h3>
							<p class="text-sm">{finProcessStep.description}</p>
							{#if finProcessStep.link}
								<button class="btn btn-link text-white" aria-label={finProcessStep.link.label}
									>{finProcessStep.link.label}</button
								>
							{/if}
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>
