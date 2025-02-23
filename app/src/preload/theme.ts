const theme = JSON.parse(localStorage.getItem("theme") || "true");

if (theme) {
	document.documentElement.classList.add("dark");
	localStorage.setItem("theme", "true");
} else {
	document.documentElement.classList.remove("dark");
	localStorage.setItem("theme", "false");
}
