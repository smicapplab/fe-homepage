import { z } from 'zod';

export const invoiceCalculatorSchema = z.object({
	invoiceAmount: z.preprocess(
		(value) => (value === null || value === undefined ? null : Number(value)),
		z
			.number({ invalid_type_error: "Invoice amount is required" })
			.max(16_000_000, 'Invoice amount cannot exceed 16,000,000.00')
	)
});
