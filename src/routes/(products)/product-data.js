export const disclaimers = [
	'All amount presented here are estimate only. Final financing amount and other terms are subject to credit assessment.',
	'The computation is based on the interest rate of 2% per month. Actual interest rate may vary depending on the credit grade and investor bid.',
	'The financing amount is based on the maximum Loan-To-Value.'
];

/**
 * Calculates the marketplace fee for a given financing amount.
 *
 * The marketplace fee is calculated as 5% of the financing amount,
 * multiplied by a 12% annual appreciation rate.
 *
 * @param {number} financingAmount - The amount borrowed from the marketplace.
 * @returns {number} - The calculated marketplace fee.
 */
export const calculateMarketplaceFee = (financingAmount) => {
	return financingAmount * 0.05 * 1.12;
};
