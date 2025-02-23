import { openNewTab } from "../utils/utils.ts";
import Githubsvg from "./svg/githubsvg.tsx";
import LeetcodeSvg from "./svg/leetcodesvg.tsx";
import LinkedinSvg from "./svg/linkedinsvg.tsx";
import ThemeToggler from "./themeToggler.tsx";

export default function Sidebar() {
	return (
		<div className="hidden fixed bottom-0 left-0 w-fit md:flex flex-col-reverse items-center m-2 gap-2 *:hover:scale-105 *:h-5 *:w-5 *:hover:cursor-pointer">
			<ThemeToggler />
			<LeetcodeSvg
				onClick={openNewTab("https://leetcode.com/u/abhishek-pattanayak/")}
			/>
			<LinkedinSvg
				onClick={openNewTab("https://www.linkedin.com/in/abhishekppattanayak")}
			/>
			<Githubsvg
				onClick={openNewTab("https://github.com/abhishekppattanayak")}
			/>
		</div>
	);
}
