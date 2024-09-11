import { fail } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';
import { zod } from 'sveltekit-superforms/adapters';
import {
	individualInvestorContactSchema,
	institutionInvestorContactSchema
} from '$lib/schemas/contact.js';

export const actions = {
	individualContact: async ({ request }) => {
		const form = await superValidate(request, zod(individualInvestorContactSchema));
		if (!form.valid) {
			return fail(400, { form });
		}

		// {
		// 	investorType: 'IND',
		// 	fullName: 'Steve Torrefranca',
		// 	email: 's.torrefranca@gmail.com',
		// 	mobile: '9178540981',
		// 	capital: 5555555
		//   }

		console.log(form.data);

		return {
			form
		};
	},
	institutionContact: async ({ request }) => {
		const form = await superValidate(request, zod(institutionInvestorContactSchema));
		if (!form.valid) {
			return fail(400, { form });
		}

		console.log(form.data);

		return {
			form
		};
	}
};
