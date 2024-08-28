import { z } from 'zod';
import { email } from './contact';

export const invoiceCalculatorSchema = z.object({
	email: email,
	product: z.string({
		required_error: 'Please enter product name.'
	}),
	invoiceAmount: z.preprocess(
		(value) => (value === null || value === undefined ? null : Number(value)),
		z
			.number({ invalid_type_error: 'Invoice amount is required' })
			.max(16_000_001, 'Invoice amount cannot exceed 16,000,000.00')
	)
});

export const poCalculatorSchema = z.object({
	email: email,
	product: z.string({
		required_error: 'Please enter product name.'
	}),
	poAmount: z.preprocess(
		(value) => (value === null || value === undefined ? null : Number(value)),
		z
			.number({ invalid_type_error: 'Invoice amount is required' })
			.max(16_000_001, 'Invoice amount cannot exceed 16,000,000.00')
	)
});

export const capitalCalculatorSchema = z.object({
	email: email,
	product: z.string({
		required_error: 'Please enter product name.'
	}),
	appraisalValue: z.preprocess(
		(value) => (value === null || value === undefined ? null : Number(value)),
		z
			.number({ invalid_type_error: 'Invoice amount is required' })
			.max(25_000_001, 'Invoice amount cannot exceed 16,000,000.00')
	)
});