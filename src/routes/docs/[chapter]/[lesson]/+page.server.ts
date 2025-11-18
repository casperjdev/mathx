import fs from 'fs';
import path from 'path';
import { parseMarkdown } from '$lib/md.js';

export const load = async ({ params }) => {
	const filePath = path.resolve('src/content', `docs/${params.chapter}/${params.lesson}.md`);

	const content = await fs.promises.readFile(filePath, 'utf-8');
	return { html: await parseMarkdown(content) };
};
