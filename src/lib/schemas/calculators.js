import { z } from 'zod';
import { appraisalValue, email, invoiceAmount, poAmount, product } from './shape-properties';

export const invoiceCalculatorSchema = z.object({
	email,
	product: z.string({
		required_error: 'Please enter product name.'
	}),
	invoiceAmount,
});

export const poCalculatorSchema = z.object({
	email: email,
	product,
	poAmount,
});

export const capitalCalculatorSchema = z.object({
	email: email,
	product,
	appraisalValue,
});
