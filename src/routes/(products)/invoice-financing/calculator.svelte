<script>
	// @ts-nocheck
	import { Icons } from '$lib/components/icons';
	import Input from '$lib/components/ui/input/input.svelte';
	import { invoiceCalculatorSchema } from '$lib/schemas/calculators';
	import { superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import numeral from 'numeral';
	import { disclaimers } from './page-data';

	// Set the default value for invoiceAmount
	let data = {
		invoiceAmount: 200000 // Default value
	};

	const form = superForm(data, {
		validators: zodClient(invoiceCalculatorSchema),
		dataType: 'json'
	});

	const { form: formData, errors, enhance } = form;

	const calculateFinAmount = (invoiceAmount) => {
		return invoiceAmount * 0.8;
	};

	const calculateMarketplaceFee = (financingAmount) => {
		return financingAmount * 0.05 * 1.12;
	};

	const interestRate = 0.02;
	const term = 3;

	$: financingAmount = calculateFinAmount($formData.invoiceAmount);
	$: marketplaceFee = calculateMarketplaceFee(financingAmount);

	$: oneTimeTerm = financingAmount * interestRate * 2 + financingAmount;
	$: threeMonthsTerm = (financingAmount * interestRate * term + financingAmount) / term;
</script>

<form method="POST" class="grid gap-2 py-5" use:enhance action="?/contact">
	<p class="px-2 label-text">Invoice Amount</p>
	<div class="grid grid-cols-3 gap-4">
		<div class="col-span-2">
			<Input type="number" name="invoiceAmount" {formData} {errors} icon={Icons.banknote} />
		</div>
	</div>
</form>

<div class="w-full">
	<div class="w-full text-center shadow stats stats-vertical sm:stats-horizontal">
		<div class="stat">
			<div class="flex items-center space-x-1 stat-title">
				<div class="w-full mb-2 text-lg font-bold text-secondary">
					<span>Financing Amount</span>
					<div class="tooltip tooltip-bottom z-100" data-tip="Estimated amount to finance">
						<Icons.info size={16} />
					</div>
				</div>
			</div>
			<div class="text-lg font-bold text-center stat-value text-primary">
				₱{numeral(financingAmount).format('0,0.00')}
			</div>
			{#if financingAmount < 100000}
				<div class="stat-desc text-error">Financing amount must be at least ₱100,000.00</div>
			{/if}
            {#if financingAmount > 15000000}
            <div class="stat-desc text-error">Financing amount must not exceed ₱15,000,000.00</div>
        {/if}
		</div>

		<div class="stat">
			<div class="flex items-center space-x-1 stat-title">
				<div class="w-full mb-2 text-lg font-bold text-secondary">
					<span>Marketplace Fee</span>
					<div class="tooltip tooltip-bottom z-100" data-tip="3.5 of amount to finance">
						<Icons.info size={16} />
					</div>
				</div>
			</div>
			<div class="text-lg font-bold stat-value text-primary">
				₱{numeral(marketplaceFee).format('0,0.00')}
			</div>
		</div>
	</div>

	<h2 class="py-3 mt-10 text-xl font-bold">Repayment Terms</h2>
	<div class="relative grid grid-cols-2 gap-2 p-5 bg-white shadow rounded-xl">
		<p class="text-lg font-bold text-center text-secondary">Terms</p>
		<p class="text-lg font-bold text-center text-secondary">Amount</p>

		<p class="font-bold">One time payment</p>
		<p class="px-5 text-lg font-bold text-center text-primary">
			₱{numeral(oneTimeTerm).format('0,0.00')}
		</p>

		<p class="font-bold">3 Monthly Installments</p>
		<p class="px-5 text-lg font-bold text-center text-primary">
			₱{numeral(threeMonthsTerm).format('0,0.00')}
		</p>

		<!-- Vertical line -->
		<div class="absolute inset-y-0 w-px bg-gray-200 left-1/2"></div>
	</div>
    <p class="mt-10 mb-2 text-sm italic font-bold">Disclaimer:</p>
    <ul class="ml-4 text-sm italic list-decimal selection:list-outside">
        {#each disclaimers as disclaimer}
            <li>{disclaimer}</li>
        {/each}
    </ul>
</div>
