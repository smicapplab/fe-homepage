<script>
	import { subscribeSchema } from '$lib/schemas/contact';
	import { superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { addToast, ToastType } from '../../../../stores/toastStores';
	import { Icons } from '$lib/components/icons';

	let isLoading = false;

	let data = {
		email: ''
	};

	const {
		form: formData,
		errors,
		enhance
	} = superForm(data, {
		validators: zodClient(subscribeSchema),
		dataType: 'json',
		onSubmit: () => {
			isLoading = true;
		},
		onResult: (result) => {
			isLoading = false;
			const { result: formResult } = result;
			if (formResult.type === 'success') {
				addToast(ToastType.success, 'Thanks for signing up for our newsletter!');
				$formData.email = '';
			} else {
				addToast(
					ToastType.error,
					' Oops! Something didn’t quite work. Please give it another shot in a moment.'
				);
			}
		}
	});
</script>

<div class="flex items-center justify-center py-6">
	<div class="container">
		<div class="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:justify-end">
			<div class="lg:justify-self-start">
				<h2 class="mb-4 text-2xl font-bold text-center text-secondary lg:text-left">
					Join Our Newsletter
				</h2>
				<p class="mb-6 text-center text-neutral lg:text-left">
					Stay in the loop with the latest tips, industry insights, and special offers. Sign up
					today and get all the good stuff straight to your inbox—totally free!
				</p>
			</div>
			<div class="flex justify-center lg:justify-start">
				<form method="POST" class="w-full max-w-lg" use:enhance action="?/subscribeToNewsletter">
					<div class="w-full mt-10 join">
						<label
							class="input grow join-item input-bordered flex items-center gap-2 focus-within:outline-none focus-within:ring-0 focus-within:ring-offset-0 {$errors.email
								? 'input-error'
								: ''}"
						>
							<Icons.email />
							<input
								class="bg-transparent focus:outline-none"
								placeholder="Email"
								name="email"
								bind:value={$formData.email}
							/>
						</label>
						<button type="submit" class="rounded-r-lg btn btn-primary join-item" disabled={isLoading}>
							{#if isLoading}
								<span class="loading loading-dots loading-lg"></span>
							{:else}
								Subscribe
							{/if}
						</button>
					</div>
					{#if $errors.email}
						<span class="text-red-600 label-text-alt lg:-mt-8">{$errors.email}</span>
					{/if}
				</form>
			</div>
		</div>
	</div>
</div>
