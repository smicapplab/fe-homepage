/**
 * Scrolls smoothly to the section with the specified ID.
 *
 * @param {string} targetSection - The ID of the section to scroll to.
 *
 * This function checks if an element with the given ID exists in the document.
 * If found, it scrolls the element into view smoothly.
 */
export const scrollToSection = (targetSection) => {
	const target = document.getElementById(targetSection);
	if (target) {
		target.scrollIntoView({ behavior: 'smooth' });
	}
};
