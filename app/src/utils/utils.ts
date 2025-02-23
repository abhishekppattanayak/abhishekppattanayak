export function openNewTab(url: string) {
	return () => globalThis.open(url, "_blank");
}
