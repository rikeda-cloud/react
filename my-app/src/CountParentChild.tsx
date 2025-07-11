import React from "react";

interface StateCounterProps {
	step: number;
	onUpdate: (step: number) => void;
};

function CountChild({ step, onUpdate }: StateCounterProps) {
	const handleClick = () => onUpdate(step);
	return (
		<button className="cnt" onClick={handleClick}>
			<span>{step}</span>
		</button>
	)
}

export function CountParent() {
	const [count, setCount] = React.useState(0);
	const update = (step: number) => setCount(c => c + step);

	return (
		<>
			<p>CNT: {count}</p>
			<CountChild step={1} onUpdate={update} />
			<CountChild step={5} onUpdate={update} />
			<CountChild step={-1} onUpdate={update} />
		</>
	)
}
