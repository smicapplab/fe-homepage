<script>
	import { Icons } from '$lib/components/icons';
</script>

<div
	class="flex items-center justify-center bg-orange-50 bg-[linear-gradient(to_right,#e0e0e02e_1px,transparent_1px),linear-gradient(to_bottom,#e0e0e02e_1px,transparent_1px)] bg-[size:14px_24px]"
>
	<div class="container mx-auto p-4">
		<div class="grid grid-cols-1 gap-5 lg:grid-cols-2">
			<div>
				<h2 class="text-center text-xl font-bold text-secondary lg:text-left lg:text-2xl">
					What does it take to qualify for our financing?
				</h2>
				<h2 class="py-3 text-xl">
					If you meet all the criteria on our checklist, you’re ready to take the next step—register
					and create your account to get started!
				</h2>
			</div>
			<div>
				<div class="join join-vertical w-full bg-white">
					<div class="join-item w-full border p-4 text-left text-xl font-medium text-neutral">
						<Icons.circleCheckBig class="mr-2 inline-block" /> Registered business in DTI or SEC for
						at least 1 year and has permit to operate
					</div>
					<div class="join-item border text-neutral">
						<div class="w-full p-4 text-left text-xl font-medium">
							<Icons.circleCheckBig class="mr-2 inline-block" /> Supplies goods and services to corporate
							clients that falls under any of the following categories:
						</div>
						<div class="text-md pb-5 pl-5">
							<ul>
								<li class="text-md list-inside list-disc">
									Government offices like LGUs, GOCCs, Departments, etc.
								</li>
								<li class="list-inside list-disc">Public-listed Corporations</li>
								<li class="list-inside list-disc">Multinational Companies</li>
								<li class="list-inside list-disc">
									Companies that belong to the Top 1000 Corporations in the Philippines
								</li>
								<li class="list-inside list-disc">Affiliates or subsidiaries of the above</li>
							</ul>
						</div>
					</div>

					<div class="join-item w-full border p-4 text-left text-xl font-medium text-neutral">
						<Icons.circleCheckBig class="mr-2 inline-block" /> Has unpaid invoices or billing statements
						and/or unfulfilled purchase orders, contracts, notice of award or notice to proceed from
						your corporate clients
					</div>

					<div class="join-item w-full border p-4 text-left text-xl font-medium text-neutral">
						<Icons.circleCheckBig class="mr-2 inline-block" /> Your business’ annual revenue is at least
						₱5 million
					</div>
					<div class="join-item w-full border p-4 text-left text-xl font-medium text-neutral">
						<Icons.circleCheckBig class="mr-2 inline-block" /> Posted net profit in the latest Audited
						Financial Statement
					</div>
					<div class="join-item w-full border p-4 text-left text-xl font-medium text-neutral">
						<Icons.circleCheckBig class="mr-2 inline-block" /> Has an active checking account from the
						past 6 months
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
