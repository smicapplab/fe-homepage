<script>
	// @ts-nocheck
	import { Icons } from '$lib/components/icons';
</script>

<div
	class="flex items-center justify-center bg-neutral bg-[linear-gradient(to_right,#6966662e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"
>
	<div class="container p-5">
		<h2 class="text-center text-2xl font-bold text-white">What is our financing process?</h2>
		<h2 class="mb-5 text-center font-bold text-white">
			Our process is 100% online, so you can apply anytime, anywhere!
		</h2>
		<div class="container mx-auto py-5">
			<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
				<div class="card relative w-full bg-base-100 shadow-xl">
					<div class="absolute -left-5 top-1/2 -translate-y-1/2 transform">
						<Icons.moveRight class="h-12 w-12 rounded-full bg-primary p-2 text-white" />
					</div>

					<div class="card-body pl-12">
						<h2 class="card-title text-primary">
							<Icons.fileStack class="mr-2 inline-block h-6 w-6" />
							Onboarding
						</h2>
						<div class="divider" />
						<ul class="list-inside list-disc space-y-4 text-neutral">
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

				<div class="card relative w-full bg-base-100 shadow-xl">
					<div class="absolute -left-5 top-1/2 -translate-y-1/2 transform">
						<Icons.moveRight class="h-12 w-12 rounded-full bg-primary p-2 text-white" />
					</div>

					<div class="card-body pl-12">
						<h2 class="card-title text-primary">
							<Icons.listTodo class="mr-2 inline-block h-6 w-6" />
							Listing
						</h2>
						<div class="divider" />
						<ul class="list-inside list-disc space-y-4 text-neutral">
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

				<div class="card relative w-full bg-base-100 shadow-xl">
					<div class="absolute -left-5 top-1/2 -translate-y-1/2 transform">
						<Icons.moveRight class="h-12 w-12 rounded-full bg-primary p-2 text-white" />
					</div>

					<div class="card-body pl-12">
						<h2 class="card-title text-primary">
							<Icons.handCoins class="mr-2 inline-block h-6 w-6" />
							Disbursement
						</h2>
						<div class="divider" />
						<ul class="list-inside list-disc space-y-4 text-neutral">
							<li><strong class="text-secondary">Disbursement</strong> of funded notes</li>
						</ul>
					</div>
				</div>

				<div class="card relative w-full bg-base-100 shadow-xl">
					<div class="absolute -left-5 top-1/2 -translate-y-1/2 transform">
						<Icons.moveRight class="h-12 w-12 rounded-full bg-primary p-2 text-white" />
					</div>

					<div class="card-body pl-12">
						<h2 class="card-title text-primary">
							<Icons.banknote class="mr-2 inline-block h-6 w-6" />
							Repayment
						</h2>
						<div class="divider" />
						<ul class="list-inside list-disc space-y-4 text-neutral">
							<li>
								<strong class="text-secondary">Receipt of issuer repayment</strong> (principal + interest
								amount)
							</li>
							<li>
								<strong class="text-secondary">Extension management</strong> for issuer extension requests,
								if applicable
							</li>
							<li>
								<strong class="text-secondary">Handling of past due or non-performing loans</strong
								>, if applicable
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
