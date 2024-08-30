import { z } from 'zod';
import {
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

export const investorContactSchema = z.object({
	investorType,
	fullName,
	email,
	mobile
});

export const referralContactSchema = z.object({
	fullName,
	companyName,
	email,
	mobile,
	message
});
