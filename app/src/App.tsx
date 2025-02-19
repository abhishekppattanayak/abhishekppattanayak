import { toggleTheme } from "./utils/toggleTheme.ts";

// @deno-types="@types/react"

function App() {
	return (
		<div className="h-screen dark:bg-black dark:text-white">
			<button onClick={toggleTheme}>Toggle</button>
		</div>
	);
}

export default App;
