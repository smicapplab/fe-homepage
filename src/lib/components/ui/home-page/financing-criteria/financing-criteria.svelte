<script>
	import { Icons } from '$lib/components/icons';
</script>

<div
	class="flex items-center justify-center bg-orange-50 bg-[linear-gradient(to_right,#e0e0e02e_1px,transparent_1px),linear-gradient(to_bottom,#e0e0e02e_1px,transparent_1px)] bg-[size:14px_24px]"
>
	<div class="container p-4 mx-auto">
		<div class="grid grid-cols-1 gap-5 lg:grid-cols-2">
			<div>
				<h2 class="text-xl font-bold text-center text-secondary lg:text-left lg:text-2xl">
					What does it take to qualify for our financing?
				</h2>
				<h2 class="py-3 text-xl">
					If you meet all the criteria on our checklist, you’re ready to take the next step—register
					and create your account to get started!
				</h2>
			</div>
			<div>
				<div class="w-full bg-white join join-vertical">
					<div class="w-full p-4 text-xl font-medium text-left border join-item text-neutral">
						<Icons.circleCheckBig class="inline-block mr-2" /> Registered business in DTI or SEC for
						at least 1 year and has permit to operate
					</div>
					<div class="border join-item text-neutral">
						<div class="w-full p-4 text-xl font-medium text-left">
							<Icons.circleCheckBig class="inline-block mr-2" /> Supplies goods and services to corporate
							clients that falls under any of the following categories:
						</div>
						<div class="pb-5 pl-5 text-md">
							<ul>
								<li class="list-disc list-inside text-md">
									Government offices like LGUs, GOCCs, Departments, etc.
								</li>
								<li class="list-disc list-inside">Public-listed Corporations</li>
								<li class="list-disc list-inside">Multinational Companies</li>
								<li class="list-disc list-inside">
									Companies that belong to the Top 1000 Corporations in the Philippines
								</li>
								<li class="list-disc list-inside">Affiliates or subsidiaries of the above</li>
							</ul>
						</div>
					</div>

					<div class="w-full p-4 text-xl font-medium text-left border join-item text-neutral">
						<Icons.circleCheckBig class="inline-block mr-2" /> Has unpaid invoices or billing statements
						and/or unfulfilled purchase orders, contracts, notice of award or notice to proceed from
						your corporate clients
					</div>

					<div class="w-full p-4 text-xl font-medium text-left border join-item text-neutral">
						<Icons.circleCheckBig class="inline-block mr-2" /> Your business’ annual revenue is at least
						₱5 million
					</div>
					<div class="w-full p-4 text-xl font-medium text-left border join-item text-neutral">
						<Icons.circleCheckBig class="inline-block mr-2" /> Posted net profit in the latest Audited
						Financial Statement
					</div>
					<div class="w-full p-4 text-xl font-medium text-left border join-item text-neutral">
						<Icons.circleCheckBig class="inline-block mr-2" /> Has an active checking account from the
						past 6 months
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
