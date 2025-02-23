import { useEffect, useState, useMemo } from "react";

export default function Hero() {
	const [blink, setBlink] = useState(true);
	const text: string = useMemo(() => "Hi! I am Abhishek Pattanayak ..", []);
	const [typing, setTyping] = useState<boolean>(false);
	const [displayText, setDisplayText] = useState<string>("");

	useEffect(() => {
		const timerArray: number[] = [];
		const typingSpeed = 50;

		setDisplayText("");
		setTyping(true);

		for (let i = 0; i < text.length; ++i) {
			const timer = setTimeout(() => {
				setDisplayText((prev: string) => prev + text[i]);
			}, typingSpeed * i);
			timerArray.push(timer);
		}

		const timer = setTimeout(() => {
			setTyping(false);
		}, typingSpeed * text.length);
		timerArray.push(timer);

		return () => {
			timerArray.forEach(clearTimeout);
		};
	}, [text]);

	useEffect(() => {
		const interval = setInterval(() => {
			setBlink((prev: boolean) => !prev);
		}, 750);
		return () => clearInterval(interval);
	}, []);

	return (
		<>
			<div className="h-screen grid place-content-center font-light">
				<h1 className="text-md md:text-xl selection:bg-purple-400 selection:text-white ">
					<span>{displayText}</span>
					{!typing && (
						<span className={`${blink && "text-transparent"}`}>.</span>
					)}
				</h1>
			</div>
		</>
	);
}
