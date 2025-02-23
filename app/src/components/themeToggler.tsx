import { useState } from "react";
import MoonSvg from "./svg/moonsvg.tsx";
import SunSvg from "./svg/sunsvg.tsx";

export default function ThemeToggler() {
	const existingTheme: boolean = JSON.parse(
		localStorage.getItem("theme") || "true"
	);
	const [theme, setTheme] = useState<boolean>(existingTheme);

	function toggleTheme() {
		const theme = document.documentElement.classList.toggle("dark");
		setTheme(theme);
		localStorage.setItem("theme", JSON.stringify(theme));
	}

	return (
		<div
			onClick={toggleTheme}
			className="active:animate-spin duration-1000"
		>
			{theme ? <SunSvg /> : <MoonSvg />}
		</div>
	);
}
