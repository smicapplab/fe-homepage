<script>
	import { Icons } from '$lib/components/icons';
	import { Input } from '$lib/components/ui/input';
	import { Select } from '$lib/components/ui/select';
	import { superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { addToast, ToastType } from '../../stores/toastStores';
	import IndividualForm from './individual-form.svelte';
	import InstitutionForm from './institution-form.svelte';
	// import { investorType } from '$lib/lov';

	// let data = {
	// 	investorType: '',
	// 	fullName: '',
	// 	email: '',
	// 	mobile: ''
	// };

	// let isLoading = false;

	// const {
	// 	form: formData,
	// 	errors,
	// 	enhance
	// } = superForm(data, {
	// 	validators: zodClient(investorContactSchema),
	// 	dataType: 'json',
	// 	onSubmit: () => {
	// 		isLoading = true;
	// 	},
	// 	onResult: (result) => {
	// 		isLoading = false;
	// 		// @ts-ignore
	// 		const { result: formResult } = result;
	// 		if (formResult.type === 'success') {
	// 			addToast(
	// 				ToastType.success,
	// 				'Thank you for reaching out! Your form has been successfully submitted. Our team at Koredor will review your details and contact you shortly to set up an initial discussion with you.'
	// 			);
	// 			// @ts-ignore
	// 			$formData = {};
	// 		} else {
	// 			addToast(
	// 				ToastType.error,
	// 				'Oops! Something went wrong while submitting the form. Please check your details and try again.'
	// 			);
	// 		}
	// 	}
	// });

	let investorType = 'IND';

</script>

<div class="container p-5 mx-auto" id="reg-form">
	<div class="grid grid-cols-1 gap-5 lg:grid-cols-2">
		<div class="py-5">
			<h2 class="text-xl font-bold text-primary lg:text-2xl">
				Diversify your investments through high-growth SMEs!
			</h2>
			<h2 class="py-3 text-xl">
				Fill out the form, and we will set up an initial discussion with you!
			</h2>
		</div>
		<div class="p-5 bg-gray-100 rounded-lg">
			<h2 class="mb-5 text-xl font-bold text-primary lg:text-2xl">Invest with Koredor as</h2>

			<div role="tablist" class="tabs tabs-bordered">
				<button
					type="button"
					role="tab"
					class="text-lg tab-bordered tab {investorType === 'IND' ? 'tab-active !border-primary text-primary font-bold' : ''}"
					aria-selected={investorType === 'IND'}
					on:click={() => (investorType = 'IND')}
				>
					Individual Investor
				</button>
				<button
					type="button"
					role="tab"
					class="text-lg tab-bordered tab {investorType === 'INS' ? 'tab-active !border-primary text-primary font-bold' : ''}"
					aria-selected={investorType === 'INS'}
					on:click={() => (investorType = 'INS')}
				>
					Institutional Investor
				</button>
			</div>

			{#if investorType === 'IND'}
				<IndividualForm />
			{:else if investorType === 'INS'}
				<InstitutionForm />
			{/if}

			<!-- <form method="POST" class="grid gap-2 py-5" use:enhance action="?/anchorContact">
				<Select
					icon={Icons.handCoins}
					label="I want to invest as"
					name="investorType"
					{formData}
					{errors}
					options={investorType}
				/>
				<Input label="Full Name" name="fullName" {formData} {errors} icon={Icons.idCard} />
				<Input label="Email" name="email" {formData} {errors} icon={Icons.email} />
				<Input
					prefix="+63"
					label="Mobile Number"
					name="mobile"
					{formData}
					{errors}
					icon={Icons.smartphone}
				/>
				<Input
					type="number"
					label="Estimated Capital for Investment with Koredor"
					name="capital"
					{formData}
					{errors}
					icon={Icons.banknote}
				/>

				<button
					type="submit"
					class="mt-2 btn btn-primary max-w-60"
					disabled={isLoading}
					aria-label="submit"
				>
					{#if isLoading}
						<span class="loading loading-dots loading-lg"></span>
					{:else}
						Submit <Icons.send />
					{/if}
				</button>
			</form> -->
		</div>
	</div>
</div>
