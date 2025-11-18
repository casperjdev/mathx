import { remark } from 'remark';
import remarkParse from 'remark-parse';
import remarkMath from 'remark-math';
import remarkRehype from 'remark-rehype';
import rehypeRaw from 'rehype-raw';
import rehypeKatex from 'rehype-katex';
import rehypeStringify from 'rehype-stringify';
import sanitizeHtml from 'sanitize-html';

const mathmlTags = [
	'math',
	'semantics',
	'annotation',
	'annotation-xml',
	'mrow',
	'mi',
	'mo',
	'mn',
	'ms',
	'msup',
	'msub',
	'msubsup',
	'mfrac',
	'mroot',
	'munder',
	'mover',
	'munderover',
	'mtable',
	'mtr',
	'mtd',
	'mspace',
	'menclose',
	'mpadded',
	'mphantom',
	'mmultiscripts',
	'mprescripts',
	'merror',
	'mtext'
];

const allowedTags = sanitizeHtml.defaults.allowedTags
	.filter((tag) => !['script', 'iframe', 'base', 'plaintext', 'link', 'style'].includes(tag))
	.concat(mathmlTags, ['div', 'span']);

const allowedAttributes: sanitizeHtml.IOptions['allowedAttributes'] = {
	'*': ['class', 'id', 'style'] // Allow class/id/style on any tag
};

export async function parseMarkdown(markdown: string): Promise<string> {
	const file = await remark()
		.use(remarkParse)
		.use(remarkMath)
		.use(remarkRehype, { allowDangerousHtml: true })
		.use(rehypeRaw)
		.use(rehypeKatex, { output: 'mathml' })
		.use(rehypeStringify)
		.process(markdown);

	return sanitizeHtml(file.toString(), {
		allowedTags,
		allowedAttributes
		// You can optionally allow specific inline styles, or extend with allowedSchemes
	});
}
