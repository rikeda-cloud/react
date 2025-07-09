import React from "react";

export function RefCounter() {
	const [stateCount, setStateCount] = React.useState(0);
	const refCount = React.useRef(0);
	const buttonRef = React.useRef<HTMLButtonElement>(null!);

	const handleClickStateCount = () => {
		setStateCount((prev) => prev + 1);
	};
	const handleClickRefCount = () => {
		refCount.current += 1;
	};
	const handleClick = () => {
		const buttonElement = buttonRef.current;
		// ここでDOM要素を取得できる
		buttonElement.textContent = 'Clicked!';
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
			<div>
				<button ref={buttonRef} onClick={handleClick}>BTN</button>
			</div>
		</div>
	)

}
