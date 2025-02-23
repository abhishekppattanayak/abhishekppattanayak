import Hero from "./components/hero.tsx";
import Sidebar from "./components/sidebar.tsx";

// @deno-types="@types/react"

function App() {
	return (
		<div className="min-h-screen dark:bg-black dark:text-white">
			<Hero />
			<Sidebar />
		</div>
	);
}

export default App;
