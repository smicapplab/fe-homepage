<script>
	import { assets } from '$app/paths';
	import { Icons } from '$lib/components/icons';
	import Input from '$lib/components/ui/input/input.svelte';
	import { contactUsFormSchema } from '$lib/schemas/contact.js';
	import { superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { addToast, ToastType } from '../../stores/toastStores';
	import Hero from '$lib/components/ui/hero/hero.svelte';
	import Seo from '$lib/components/seo.svelte';

	const title = 'Let’s Konnect!';
	const description =
		'Whether you have a question or feedback, we’re here to help and support you every step of the way.';

	const lat = 14.547707094465098;
	const lng = 121.05199743189662;

	$: mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d966.4506370858161!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s${lat}%2C${lng}!5e0!3m2!1sen!2sus!4v1635787124!5m2!1sen!2sus`;	
	let isLoading = false;

	let data = {
		fullName: "",
		companyName: "",
		email: "",
		mobile: "",
		message: ""
	};
	const form = superForm(data, {
		validators: zodClient(contactUsFormSchema),
		dataType: 'json',
		onSubmit: () => {
			isLoading = true;
		},
		onResult: (result) => {
			isLoading = false;
			const { result: formResult } = result;
			if (formResult.type === 'success') {
				addToast(
					ToastType.success,
					'Thank you for contacting us. We will get back to you shortly.'
				);
			} else {
				addToast(
					ToastType.error,
					'Oops! Something didn’t quite work. Please give it another shot in a moment.'
				);
			}
		}
	});

	const { form: formData, errors, enhance } = form;
</script>

<Seo {title} {description} />

<Hero
	backgroundImage={assets + '/images/hero/contact.jpg'}
	heroLabel={title}
	heroDescription={description}
/>

<div class="flex items-center justify-center">
	<div class="container p-5">
		<div class="grid grid-cols-1 gap-5 py-10 lg:grid-cols-2">
			<div>
				<h2 class="text-2xl font-bold text-primary">Get in touch with us!</h2>
				<p class="text-secondary">
					Just fill out the form, and we’ll get back to you as soon as we can!
				</p>
			</div>
			<div>
				<form method="POST" class="grid gap-2" use:enhance action="?/contact">
					<Input label="Full Name" name="fullName" {formData} {errors} icon={Icons.idCard} />
					<Input
						label="Company Name"
						name="companyName"
						{formData}
						{errors}
						icon={Icons.building}
					/>
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
						aria-label="message"
						rows="10"
					></textarea>
					{#if $errors.message}
						<span class="text-red-600 label-text-alt">{$errors.message}</span>
					{/if}

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
				</form>
			</div>
		</div>
		<div class="p-5 bg-gray-100 lg:p-10">
			<div class="grid grid-cols-1 gap-5 py-10 lg:grid-cols-2">
				<div>
					<h2 class="mb-5 text-2xl font-bold text-primary">Koredor Philippines</h2>
					<div class="grid grid-cols-1 gap-8 md:grid-cols-2">
						<div class="flex items-start space-x-4">
							<Icons.mapPin class="flex-shrink-0 mr-2 text-secondary" />
							<div class="flex-grow">
								<h4 class="text-lg font-semibold text-secondary">Address</h4>
								<p>17th Floor Unit 1702, High Street South Corporate Plaza Tower 2,</p>
								<p>Bonifacio Global City, Fort Bonifacio, 1634,</p>
								<p>Taguig City, Fourth District, Philippines</p>
							</div>
						</div>

						<div class="flex items-start space-x-4">
							<Icons.clock class="flex-shrink-0 mr-2 text-secondary" />
							<div class="flex-grow">
								<h4 class="text-lg font-semibold text-secondary">Office Hours</h4>
								<p>Monday - Friday</p>
								<p>9:00 AM - 5:00 PM</p>
							</div>
						</div>

						<!-- Mobile Numbers Section -->
						<div class="flex items-start space-x-4">
							<Icons.clock class="flex-shrink-0 mr-2 text-secondary" />
							<div class="flex-grow">
								<h4 class="text-lg font-semibold text-secondary">Mobile Numbers</h4>
								<p>+63 917 519 9303</p>
								<p>+63 917 854 0981</p>
							</div>
						</div>


						<!-- Email Section -->
						<div class="flex items-start space-x-4">
							<Icons.email class="flex-shrink-0 mr-2 text-secondary" />
							<div class="flex-grow">
								<h4 class="text-lg font-semibold text-secondary">Emails</h4>
								<p>info@koredorcapital.com</p>
							</div>
						</div>
					</div>
				</div>
				<div>
					<div class="relative h-80">
						<iframe
							width="100%"
							height="100%"
							style="border:0"
							loading="lazy"
							allowfullscreen
							referrerpolicy="no-referrer-when-downgrade"
							src="{mapUrl}&disableDefaultUI=true&scrollwheel=false&draggable=false&gestureHandling=none"
							title="Google Map"
						></iframe>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
