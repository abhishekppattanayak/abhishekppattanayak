const theme = JSON.parse(localStorage.getItem("theme") || "true");

if (theme) {
	document.documentElement.classList.add("dark");
} else {
	document.documentElement.classList.remove("dark");
}
