import React from "react";

export function RefCounter() {
	const [stateCount, setStateCount] = React.useState(0);
	const refCount = React.useRef(0);

	const handleClickStateCount = () => {
		setStateCount((prev) => prev + 1);
	};
	const handleClickRefCount = () => {
		refCount.current += 1;
	}

	return (
		<div>
			<div>
				<div>State Counter</div>
				<div>
					<span>{stateCount}</span>
					<button onClick={handleClickStateCount}>+</button>
				</div>
			</div>
			<div>
				<div>Ref Counter</div>
				<div>
					<span>{refCount.current}</span>
					<button onClick={handleClickRefCount}>+</button>
				</div>
			</div>
		</div>
	)

}
