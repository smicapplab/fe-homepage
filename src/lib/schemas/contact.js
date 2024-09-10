import { z } from 'zod';
import {
	capital,
	companyName,
	email,
	fullName,
	industry,
	investorType,
	message,
	mobile
} from './shape-properties';

export const subscribeSchema = z.object({
	email
});

export const contactUsFormSchema = z.object({
	fullName,
	companyName,
	email,
	mobile,
	message
});

export const anchorContactSchema = z.object({
	fullName,
	companyName,
	email,
	mobile,
	industry,
	message
});

const baseSchema = z.object({
	investorType,
	fullName,
	email,
	mobile,
	capital
});

export const individualInvestorContactSchema = baseSchema;

export const institutionInvestorContactSchema = baseSchema.extend({
	companyName,
	industry
});

// @ts-ignore
export const getInvestorSchema = (type) => {
	return type === 'INS' ? institutionInvestorContactSchema : individualInvestorContactSchema;
};

export const referralContactSchema = z.object({
	fullName,
	companyName,
	email,
	mobile,
	message
});
