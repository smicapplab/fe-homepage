<script>
	import { Icons } from '$lib/components/icons';
	import { Input } from '$lib/components/ui/input';
	import { referralContactSchema } from '$lib/schemas/contact';
	import { superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { addToast, ToastType } from '../../stores/toastStores';

	let data = {
		fullName: '',
		companyName: '',
		email: '',
		mobile: '',
		message: ''
	};

	let isLoading = false;

	const {
		form: formData,
		errors,
		enhance
	} = superForm(data, {
		validators: zodClient(referralContactSchema),
		dataType: 'json',
		onSubmit: () => {
			isLoading = true;
		},
		onResult: (result) => {
			isLoading = false;
			// @ts-ignore
			const { result: formResult } = result;
			if (formResult.type === 'success') {
				addToast(
					ToastType.success,
					'Thank you for reaching out! Your form has been successfully submitted. Our team at Koredor will review your details and contact you shortly to set up an initial discussion with you.'
				);
				// @ts-ignore
				$formData = {};
			} else {
				addToast(
					ToastType.error,
					'Oops! Something went wrong while submitting the form. Please check your details and try again.'
				);
			}
		}
	});
</script>

<div class="container p-5 mx-auto">
	<div class="grid grid-cols-1 gap-5 lg:grid-cols-2">
		<div class="py-5">
			<h2 class="text-xl font-bold text-primary lg:text-2xl">
				Why join our referral program as a Growth Solutions Partner?
			</h2>
			<div>
				<h2 class="py-3 text-xl">Your business network is your net worth!</h2>

				<div
					class="flex items-start w-full mt-5 mb-3 space-x-2 text-xl font-medium text-left join-item text-neutral"
				>
					<Icons.circleCheckBig class="flex-shrink-0" />
					<div class="flex-1 text-base">
						<p class="font-bold">Unlimited Income Potential</p>
						<p>Receive rewarding commissions for every successful referral</p>
					</div>
				</div>

				<div
					class="flex items-start w-full mt-5 mb-3 space-x-2 text-xl font-medium text-left join-item text-neutral"
				>
					<Icons.circleCheckBig class="flex-shrink-0" />
					<div class="flex-1 text-base">
						<p class="font-bold">Work-Life Balance</p>
						<p>
							Enjoy working and thriving at your own pace without the pressure of meeting quotas
						</p>
					</div>
				</div>

				<div
					class="flex items-start w-full mt-5 mb-3 space-x-2 text-xl font-medium text-left join-item text-neutral"
				>
					<Icons.circleCheckBig class="flex-shrink-0" />
					<div class="flex-1 text-base">
						<p class="font-bold">Exclusive Support and Empowerment</p>
						<p>
							Access privileged resources and support to boost your earnings and promote financial
							inclusion nationwide.
						</p>
					</div>
				</div>
			</div>
		</div>
		<div class="p-5 rounded-lg bg-base-200">
			<h2 class="text-xl font-bold text-primary lg:text-2xl">Invest with Koredor</h2>
			<form method="POST" class="grid gap-2 py-5" use:enhance action="?/anchorContact">
				<Input label="Full Name" name="fullName" {formData} {errors} icon={Icons.idCard} />
				<Input label="Company Name" name="companyName" {formData} {errors} icon={Icons.building} />
				<Input label="Email" name="email" {formData} {errors} icon={Icons.email} />
				<Input
					prefix="+63"
					label="Mobile Number"
					name="mobile"
					{formData}
					{errors}
					icon={Icons.smartphone}
				/>

				<textarea
					class="textarea textarea-bordered {$errors.message ? 'textarea-error' : ''}"
					placeholder="Your Message"
					bind:value={$formData.message}
				></textarea>
				{#if $errors.message}
					<span class="text-red-600 label-text-alt">{$errors.message}</span>
				{/if}

				<button type="submit" class="mt-2 btn btn-primary max-w-60" disabled={isLoading}>
					{#if isLoading}
						<span class="loading loading-dots loading-lg"></span>
					{:else}
						Submit <Icons.send/>
					{/if}
				</button>
			</form>
		</div>
	</div>
</div>
