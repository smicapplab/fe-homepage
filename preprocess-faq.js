import natural from 'natural';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name of the current module
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Read the JSON file
const faqData = JSON.parse(fs.readFileSync(path.join(__dirname, 'src', 'lib', 'data', 'preprocess-data.json'), 'utf8'));

const tokenizer = new natural.WordTokenizer();
const stemmer = natural.PorterStemmer;

function preprocessText(text) {
	const tokens = tokenizer.tokenize(text.toLowerCase());
	return tokens.map((token) => stemmer.stem(token));
}

const preprocessedFAQ = faqData.map((item) => ({
	...item,
	preprocessedCombined: [...preprocessText(item.question), ...preprocessText(item.answer)]
}));

// Save preprocessed data to a JSON file
fs.writeFileSync('./src/lib/data/preprocessed_faq.json', JSON.stringify(preprocessedFAQ, null, 2));

console.log('Preprocessed FAQ data has been saved to preprocessed_faq.json');
