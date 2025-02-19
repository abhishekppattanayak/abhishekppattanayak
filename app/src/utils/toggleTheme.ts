export function toggleTheme() {
	const theme = document.documentElement.classList.toggle("dark");
	localStorage.setItem("theme", JSON.stringify(theme));
}
