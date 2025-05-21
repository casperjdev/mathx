export function slugify(str: string) {
	return str
		.toLowerCase() // Convert to lowercase
		.trim() // Remove whitespace from both ends
		.replace(/\s+/g, '-') // Replace spaces with dashes
		.replace(/[^\w\-]+/g, '') // Remove non-word characters except dashes
		.replace(/--+/g, '-'); // Replace multiple dashes with a single one
}

export function deslugify(str: string) {
	return str
		.replace(/-/g, ' ') // Replace hyphens with spaces
		.replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize first letter of each word
}
