const table = {
	alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
	padding: '=',
};

export function toBase64(string: string) {
	return string
		.split('')
		.flatMap((string) => string.charCodeAt(0))
		.flatMap((number, index, array) =>
			(index % 3 == 0 ? table.alphabet[number >> 2] : table.alphabet[
				(array[index - 1] & (2 ** (2 * (index % 3)) - 1)) >> (6 - 2 * (index % 3)) +
					number >>
				(6 - 2 * (index % 3))
			]) +
			(((array.length - 1) == index && (index % 3) != 2)
			? table.alphabet[(number << (4 - 2 * (index % 3))) & 0b111111] + '='.repeat(2 - (index % 3))
			: '')
		).join('');
}

export function toString(string: string) {
	throw new Error('Unimplemented feature.');
}
