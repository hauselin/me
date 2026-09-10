// HEAD-requests every file the site links to on the CDN. Run: node --experimental-strip-types scripts/check-links.ts
import { papers } from '../src/lib/data/papers.ts';
import { pdfUrl, CDN } from '../src/lib/config.ts';

const urls = new Set<string>([`${CDN}/me-static/cv_hauselin.pdf`, `${CDN}/me-static/obsidian.gif`]);
for (const p of papers) {
	if (p.pdf) urls.add(pdfUrl(p.pdf));
	for (const x of p.extras ?? []) urls.add(pdfUrl(x.href));
}

const rows = await Promise.all(
	[...urls].map(async (u) => {
		const r = await fetch(u, { method: 'HEAD', redirect: 'manual' }).catch((e) => ({
			status: 'ERR',
			headers: new Headers({ 'content-type': String(e) })
		}));
		return { status: String(r.status), type: r.headers.get('content-type') ?? '', u };
	})
);
rows.sort((a, b) => a.status.localeCompare(b.status) || a.u.localeCompare(b.u));
for (const r of rows) console.log(`${r.status}\t${r.type}\t${r.u}`);
const bad = rows.filter((r) => !/^[23]/.test(r.status));
console.log(`\n${rows.length} urls, ${bad.length} failing`);
process.exit(bad.length ? 1 : 0);
