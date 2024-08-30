import { z } from 'zod';

export const mobileRegex = /^\d{10,}$/;
export const mobile = z
	.string({
		required_error: 'Please enter your mobile number.'
	})
	.refine((val) => mobileRegex.test(val), {
		message: 'Mobile number must be at least 10 numeric digits'
	});

export const product = z.string({
	required_error: 'Please enter product name.'
});

export const invoiceAmount = z.preprocess(
	(value) => (value === null || value === undefined ? null : Number(value)),
	z
		.number({ invalid_type_error: 'Invoice amount is required' })
		.max(16_000_001, 'Invoice amount cannot exceed 16,000,000.00')
);

export const poAmount = z.preprocess(
	(value) => (value === null || value === undefined ? null : Number(value)),
	z
		.number({ invalid_type_error: 'Invoice amount is required' })
		.max(16_000_001, 'Invoice amount cannot exceed 16,000,000.00')
);

export const appraisalValue = z.preprocess(
	(value) => (value === null || value === undefined ? null : Number(value)),
	z
		.number({ invalid_type_error: 'Invoice amount is required' })
		.max(25_000_001, 'Invoice amount cannot exceed 16,000,000.00')
);

export const email = z
	.string({
		required_error: 'Email is required.'
	})
	.email('Please enter a valid email address so we can reach you.');

export const fullName = z
	.string({
		required_error: 'Kindly provide your full name so we can address you properly.'
	})
	.min(1, 'Kindly provide your full name so we can address you properly.');

export const companyName = z
	.string({
		required_error: 'Please provide your company name so we know where you are from.'
	})
	.min(1, 'Please provide your company name so we know where you are from.');

export const message = z
	.string({
		required_error: 'Please share your thoughts with us by entering a message.'
	})
	.min(1, 'Please share your thoughts with us by entering a message.');

export const industry = z
	.string({
		required_error: 'Please select a company industry'
	})
	.min(1, 'Please select a company industry');

export const investorType = z
	.string({
		required_error: 'Please select a type of investor'
	})
	.min(1, 'Please select a type of investor');
