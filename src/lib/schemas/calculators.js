import { z } from 'zod';
import { appraisalValue, email, invoiceAmount, poAmount, product } from './shape-properties';

export const invoiceCalculatorSchema = z.object({
	email,
	product: z.string({
		required_error: 'Please enter product name.'
	}),
	invoiceAmount
}).passthrough();

export const poCalculatorSchema = z.object({
	email: email,
	product,
	poAmount
}).passthrough();

export const capitalCalculatorSchema = z.object({
	email: email,
	product,
	appraisalValue
}).passthrough();
