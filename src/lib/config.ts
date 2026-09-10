export const CDN = 'https://cdn.ausdat.fyi';

// Paper entries hold either a bare filename (an R2 key under papers/) or a full URL.
export function pdfUrl(pdf: string): string {
	return pdf.startsWith('http') ? pdf : `${CDN}/papers/${encodeURIComponent(pdf)}`;
}
