// @ts-nocheck
import { fail } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';
import { zod } from 'sveltekit-superforms/adapters';
import { invoiceCalculatorSchema } from '$lib/schemas/calculators.js';

export const actions = {
	sendComputation: async ({ request }) => {
		// First, get the raw form data
		const formData = await request.formData();

		// Log all form data entries
		for (let [key, value] of formData.entries()) {
			console.log(key, value);
		}

		// Now validate the form
		const form = await superValidate(formData, zod(invoiceCalculatorSchema));

		if (!form.valid) {
			return fail(400, { form });
		}

		console.log('Validated form data:', form.data);

		// Extract additional data
		const additionalData = {
			interestRate: parseFloat(formData.get('interestRate') || '0'),
			financingAmount: parseFloat(formData.get('financingAmount') || '0'),
			marketplaceFee: parseFloat(formData.get('marketplaceFee') || '0'),
			amountToPay: JSON.parse(formData.get('amountToPay') || '{}'),
			paymentTerms: JSON.parse(formData.get('paymentTerms') || '[]'),
			amount: JSON.parse(formData.get('amount') || '{}')
		};

		console.log('Additional data:', additionalData);

		return {
			form
		};

		// let form = {};
		// try {
		// 	//const formData = await request.formData();
		// 	form = await superValidate(request, zod(invoiceCalculatorSchema));
		// 	// @ts-ignore
		// 	if (!form.valid) {
		// 		return fail(400, { form });
		// 	}

		// 	console.log('Validated form data:', form.data);

		// 	// Parse additional data if it exists
		// 	let additionalData = {};
		// 	if (form.data.additionalData) {
		// 	  try {
		// 		additionalData = JSON.parse(form.data.additionalData);
		// 	  } catch (error) {
		// 		console.error('Error parsing additional data:', error);
		// 	  }
		// 	}

		// 	console.log('Additional data:', additionalData);
		// } catch (err) {
		// 	console.error(err);
		// }

		// return {
		// 	form
		// };
	}
};
