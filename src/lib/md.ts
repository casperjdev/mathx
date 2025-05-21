import { remark } from 'remark';
import rehype from 'remark-rehype';
import parse from 'remark-parse';
import stringify from 'rehype-stringify';
import raw from 'rehype-raw';
import math from 'remark-math';
import katex from 'rehype-katex';
import sanitize from 'sanitize-html';

export async function parseMarkdown(markdown: string) {
	const result = await remark()
		.use(parse)
		.use(math)
		.use(rehype, { allowDangerousHtml: true })
		.use(raw)
		.use(katex, { output: 'mathml' })
		.use(stringify)
		.process(markdown);
	return sanitize(result.toString(), {
		allowedAttributes: false,
		allowedTags: sanitize.defaults.allowedTags
			.filter((tag) => !['script', 'iframe', 'base', 'plaintext', 'link', 'style'].includes(tag))
			.concat([
				'semantics',
				'annotation',
				'annotation-xml',
				'math',
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
			])
	});
}
