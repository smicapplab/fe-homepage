<script>
	// @ts-nocheck
	import { Icons } from '$lib/components/icons';
</script>

<div
	class="flex items-center justify-center bg-neutral bg-[linear-gradient(to_right,#6966662e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"
>
	<div class="container p-5">
		<h2 class="text-2xl font-bold text-center text-white">What is our financing process?</h2>
		<h2 class="mb-5 font-bold text-center text-white">
			Our process is 100% online, so you can apply anytime, anywhere!
		</h2>
		<div class="container py-5 mx-auto">
			<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
				<div class="relative w-full shadow-xl card bg-base-100">
					<div class="absolute transform -translate-y-1/2 -left-5 top-1/2">
						<Icons.moveRight class="w-12 h-12 p-2 text-white rounded-full bg-primary" />
					</div>

					<div class="pl-12 card-body">
						<h2 class="card-title text-primary">
							<Icons.fileStack class="inline-block w-6 h-6 mr-2" />
							Onboarding
						</h2>
						<div class="divider" />
						<ul class="space-y-4 list-disc list-inside text-neutral">
							<li>
								Submission of <strong class="text-secondary">standard onboarding documents</strong>
							</li>
							<li>
								Determination of preferred <strong class="text-secondary"
									>mode of disbursement</strong
								> to SMEs
							</li>
							<li>Submission of additional documents, if applicable</li>
						</ul>
					</div>
				</div>

				<div class="relative w-full shadow-xl card bg-base-100">
					<div class="absolute transform -translate-y-1/2 -left-5 top-1/2">
						<Icons.moveRight class="w-12 h-12 p-2 text-white rounded-full bg-primary" />
					</div>

					<div class="pl-12 card-body">
						<h2 class="card-title text-primary">
							<Icons.listTodo class="inline-block w-6 h-6 mr-2" />
							Listing
						</h2>
						<div class="divider" />
						<ul class="space-y-4 list-disc list-inside text-neutral">
							<li>
								<strong class="text-secondary">Note offering, bidding</strong>, and
								<strong class="text-secondary">auction</strong> through our platform
							</li>
							<li>
								<strong class="text-secondary">Due diligence on notes available for bidding</strong>
							</li>
						</ul>
					</div>
				</div>

				<div class="relative w-full shadow-xl card bg-base-100">
					<div class="absolute transform -translate-y-1/2 -left-5 top-1/2">
						<Icons.moveRight class="w-12 h-12 p-2 text-white rounded-full bg-primary" />
					</div>

					<div class="pl-12 card-body">
						<h2 class="card-title text-primary">
							<Icons.handCoins class="inline-block w-6 h-6 mr-2" />
							Disbursement
						</h2>
						<div class="divider" />
						<ul class="space-y-4 list-disc list-inside text-neutral">
							<li><strong class="text-secondary">Disbursement</strong> of funded notes</li>
						</ul>
					</div>
				</div>

				<div class="relative w-full shadow-xl card bg-base-100">
					<div class="absolute transform -translate-y-1/2 -left-5 top-1/2">
						<Icons.moveRight class="w-12 h-12 p-2 text-white rounded-full bg-primary" />
					</div>

					<div class="pl-12 card-body">
						<h2 class="card-title text-primary">
							<Icons.banknote class="inline-block w-6 h-6 mr-2" />
							Repayment
						</h2>
						<div class="divider" />
						<ul class="space-y-4 list-disc list-inside text-neutral">
							<li><strong class="text-secondary">Receipt of issuer repayment</strong> (principal + interest amount)</li>
							<li><strong class="text-secondary">Extension management</strong> for issuer extension requests, if applicable</li>
							<li><strong class="text-secondary">Handling of past due or non-performing loans</strong>, if applicable</li>
						</ul>
					</div>
				</div>

			</div>
		</div>
	</div>
</div>
