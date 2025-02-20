import Hero from "./components/hero.tsx";

// @deno-types="@types/react"

function App() {
	return (
		<div className="min-h-screen dark:bg-black dark:text-white">
			<Hero />
		</div>
	);
}

export default App;
