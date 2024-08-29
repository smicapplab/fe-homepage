<script>
	// @ts-nocheck
	import { Icons } from '$lib/components/icons';
	import Input from '$lib/components/ui/input/input.svelte';
	import { poCalculatorSchema } from '$lib/schemas/calculators';
	import { superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import numeral from 'numeral';
	import { calculateMarketplaceFee, disclaimers } from '../product-data';
	import { product } from '$lib/components/enums';
	import { addToast, ToastType } from '../../../stores/toastStores';

	// Set the default value for poAmount
	let data = {
		email: '',
		poAmount: 200000,
		product: product.po
	};

	let showForm = false;
	let isLoading = false;
	const interestRate = 0.02;
	const paymentTerms = [1, 3, 6, 9, 12];

	$: financingAmount = calculateFinAmount($formData.poAmount);
	$: marketplaceFee = calculateMarketplaceFee(financingAmount);
	$: amountToPay = calculateRepayment(financingAmount);

	const form = superForm(data, {
		validators: zodClient(poCalculatorSchema),
		dataType: 'json',
		onSubmit: () => {
			isLoading = true;
		},
		onResult: (result) => {
			isLoading = false;
			// @ts-ignore
			const { result: formResult } = result;
			showForm = false;
			if (formResult.type === 'success') {
				addToast(ToastType.success, 'Your computation has been sent! Please check your inbox.');
				//$formData.email = '';
			} else {
				addToast(
					ToastType.error,
					' Oops! Something didn’t quite work. Please give it another shot in a moment.'
				);
			}
		}
	});

	const { form: formData, errors, enhance } = form;

	const calculateFinAmount = (poAmount) => {
		return poAmount * 0.5;
	};

	const calculateRepayment = (finAmount) => {
		let amount = {};
		paymentTerms.forEach((term) => {
			if (term == 1) {
				amount[term] = finAmount * interestRate * 2 + finAmount;
			} else if (term == 3 || (term > 3 && finAmount >= 1500000)) {
				amount[term] = (finAmount * interestRate * term + finAmount) / term;
			}
		});
		return amount;
	};

	const toggleForm = () => {
		isLoading = false;
		showForm = !showForm;
	};
</script>

<form method="POST" class="grid gap-2 py-5" use:enhance action="?/sendComputation">
	<p class="px-2 label-text">Purchase Order Amount</p>
	<div class="grid grid-cols-3 gap-4">
		<div class="col-span-2">
			<Input type="number" name="poAmount" {formData} {errors} icon={Icons.banknote} />
		</div>
	</div>

	<div class="w-full">
		<div class="w-full text-center shadow no-scrollbar stats stats-vertical sm:stats-horizontal">
			<div class="p-3 stat">
				<div class="flex items-center space-x-1 stat-title">
					<div class="w-full mb-2 font-bold text-secondary">
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
					<div class="w-full mb-2 font-bold text-secondary">
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
			<p class="font-bold text-center text-secondary">Terms</p>
			<p class="font-bold text-center text-secondary">Amount</p>

			{#each Object.keys(amountToPay) as key}
				<p>
					{#if key == 1}
						One time payment
					{:else}
						{key} Monthly Installments
					{/if}
				</p>
				<p class="px-5 text-lg text-right text-primary">
					₱{numeral(amountToPay[key]).format('0,0.00')}
				</p>
			{/each}
			<div class="absolute inset-y-0 w-px bg-gray-200 left-1/2"></div>
		</div>

		<div class="flex justify-center mt-5">
			{#if showForm}
				<div class="w-full join">
					<label
						class="input join-item input-bordered flex grow items-center gap-2 focus-within:outline-none focus-within:ring-0 focus-within:ring-offset-0 {$errors.email
							? 'input-error'
							: ''}"
					>
						<Icons.email />
						<input
							class="w-full bg-transparent focus:outline-none"
							placeholder="Email"
							name="email"
							bind:value={$formData.email}
						/>
					</label>
					<button type="submit" class="rounded-r-lg btn btn-primary join-item" disabled={isLoading}>
						{#if isLoading}
							<span class="loading loading-dots loading-lg"></span>
						{:else}
							Submit <Icons.send/>
						{/if}
					</button>
				</div>
			{:else}
				<button class="btn btn-primary" on:click={toggleForm}><Icons.email/> Send Computation Via Email</button>
			{/if}
		</div>
		{#if $errors.email}
			<span class="text-red-600 label-text-alt lg:-mt-8">{$errors.email}</span>
		{/if}

		<p class="mt-10 mb-2 text-sm italic font-bold">Disclaimer:</p>
		<ul class="ml-4 text-sm italic list-decimal selection:list-outside">
			{#each disclaimers as disclaimer}
				<li>{disclaimer}</li>
			{/each}
		</ul>
	</div>
</form>

<style>
	.no-scrollbar {
		overflow: hidden;
	}

	.no-scrollbar::-webkit-scrollbar {
		display: none;
	}

	.no-scrollbar {
		-ms-overflow-style: none;
		scrollbar-width: none;
	}
</style>
