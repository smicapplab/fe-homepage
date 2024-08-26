<script>
	import Calculator from './calculator.svelte';
import { ratesTerms } from './page-data';
</script>

<div class="container p-5 mx-auto">
	<div class="grid grid-cols-1 gap-5 lg:grid-cols-2">
		<div class="py-5">
			<h2 class="text-xl font-bold text-primary lg:text-2xl">What are our rates and terms?</h2>
			<div class="grid grid-cols-2 gap-2 py-5">
				{#each ratesTerms as ratesTerm}
					<div class="font-bold text-secondary">{ratesTerm.label}</div>
					<p>{ratesTerm.value}</p>
				{/each}
			</div>
		</div>
		<div class="p-5 rounded-lg bg-base-200">
			<h2 class="text-xl font-bold text-primary lg:text-2xl">Loan Calculator</h2>
            <Calculator />
		</div>
	</div>
</div>
