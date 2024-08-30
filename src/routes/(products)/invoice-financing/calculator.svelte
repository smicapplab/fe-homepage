<script>
	// @ts-nocheck
	import { Icons } from '$lib/components/icons';
	import Input from '$lib/components/ui/input/input.svelte';
	import { invoiceCalculatorSchema } from '$lib/schemas/calculators';
	import { superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import numeral from 'numeral';
	import { calculateMarketplaceFee, disclaimers } from '../product-data';
	import { product } from '$lib/components/enums';

	// Set the default value for invoiceAmount
	let data = {
		email: '',
		invoiceAmount: 200000,
		product: product.invoice
	};

	let showForm = false;
	let isLoading = false;
	const interestRate = 0.02;
	const paymentTerms = [1, 3, 6, 9, 12];

	$: financingAmount = calculateFinAmount($formData.invoiceAmount);
	$: marketplaceFee = calculateMarketplaceFee(financingAmount);
	$: amountToPay = calculateRepayment(financingAmount);

	const form = superForm(data, {
		validators: zodClient(invoiceCalculatorSchema),
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

	const calculateFinAmount = (invoiceAmount) => {
		return invoiceAmount * 0.8;
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
	<p class="label-text px-2">Invoice Amount</p>
	<div class="grid grid-cols-3 gap-4">
		<div class="col-span-2">
			<Input type="number" name="invoiceAmount" {formData} {errors} icon={Icons.banknote} />
		</div>
	</div>

	<div class="w-full">
		<div class="no-scrollbar stats stats-vertical w-full text-center shadow sm:stats-horizontal">
			<div class="stat p-3">
				<div class="stat-title flex items-center space-x-1">
					<div class="mb-2 w-full font-bold text-secondary">
						<span>Financing Amount</span>
						<div class="tooltip tooltip-bottom z-100" data-tip="Estimated amount to finance">
							<Icons.info size={16} />
						</div>
					</div>
				</div>
				<div class="stat-value text-center text-lg font-bold text-primary">
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
				<div class="stat-title flex items-center space-x-1">
					<div class="mb-2 w-full font-bold text-secondary">
						<span>Marketplace Fee</span>
						<div class="tooltip tooltip-bottom z-100" data-tip="3.5 of amount to finance">
							<Icons.info size={16} />
						</div>
					</div>
				</div>
				<div class="stat-value text-lg font-bold text-primary">
					₱{numeral(marketplaceFee).format('0,0.00')}
				</div>
			</div>
		</div>

		<h2 class="mt-10 py-3 text-xl font-bold">Repayment Terms</h2>
		<div class="relative grid grid-cols-2 gap-2 rounded-xl bg-white p-5 shadow">
			<p class="text-center font-bold text-secondary">Terms</p>
			<p class="text-center font-bold text-secondary">Amount</p>

			{#each Object.keys(amountToPay) as key}
				<p>
					{#if key == 1}
						One time payment
					{:else}
						{key} Monthly Installments
					{/if}
				</p>
				<p class="px-5 text-right text-lg text-primary">
					₱{numeral(amountToPay[key]).format('0,0.00')}
				</p>
			{/each}
			<div class="absolute inset-y-0 left-1/2 w-px bg-gray-200"></div>
		</div>

		<div class="mt-5 flex justify-center">
			{#if showForm}
				<div class="join w-full">
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
					<button
						type="submit"
						class="btn btn-primary join-item rounded-r-lg"
						disabled={isLoading}
						aria-label="submit"
					>
						{#if isLoading}
							<span class="loading loading-dots loading-lg"></span>
						{:else}
							Submit <Icons.send />
						{/if}
					</button>
				</div>
			{:else}
				<button class="btn btn-primary" on:click={toggleForm} aria-label="send-compute"
					><Icons.email /> Send Computation Via Email</button
				>
			{/if}
		</div>
		{#if $errors.email}
			<span class="label-text-alt text-red-600 lg:-mt-8">{$errors.email}</span>
		{/if}

		<p class="mb-2 mt-10 text-sm font-bold italic">Disclaimer:</p>
		<ul class="ml-4 list-decimal text-sm italic selection:list-outside">
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
