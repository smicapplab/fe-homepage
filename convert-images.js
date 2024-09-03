import { glob } from 'glob';
import sharp from 'sharp';

// Adjust the path pattern according to your image location
const images = glob.sync('static/images/**/*.{jpg,jpeg,png}');

images.forEach((image) => {
	console.log('Converting:', image);
	const output = image.replace(/\.(jpg|jpeg|png)$/i, '.webp');
	sharp(image)
		.webp({ quality: 80 }) // Adjust quality as needed
		.toFile(output, (err, info) => {
			if (err) {
				console.error('Error converting image:', image, err);
			} else {
				console.log('Converted:', image, 'to', output);
			}
		});
});
