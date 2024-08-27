<script>
	import { Icons } from '$lib/components/icons';
	import { finProcessSteps } from './financing-data';
</script>

<div class="flex bg-neutral items-center justify-center bg-[linear-gradient(to_right,#6966662e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]">
	<div class="container p-5">
		<h2 class="text-2xl font-bold text-center text-white">What is our financing process?</h2>
		<h2 class="mb-5 font-bold text-center text-white">
			Our process is 100% online, so you can apply anytime, anywhere!
		</h2>
		<div class="container p-4 mx-auto">
			<div class="timeline">
				{#each finProcessSteps as finProcessStep, index}
					<div class="timeline-item">
						<div class="mr-3 timeline-icon whitespace-nowrap">
							{#if finProcessSteps.length - 1 === index}
								<Icons.circleDot class="inline-block mr-2" />
							{:else}
								<Icons.circleChevronRight class="inline-block mr-2" />
							{/if}

							Step {index + 1}
						</div>
						<div class="h-full timeline-content bg-secondary text-secondary-content">
							<h3 class="text-lg font-bold">{finProcessStep.title}</h3>
							<p class="text-sm">{finProcessStep.description}</p>
							{#if finProcessStep.link}
								<button class="text-white btn btn-link">{finProcessStep.link.label}</button>
							{/if}
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>
