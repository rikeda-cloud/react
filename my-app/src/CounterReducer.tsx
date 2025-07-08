import React from "react";

type Inc = {
	type: "Inc";
	step: number;
};

type Dec = {
	type: "Dec";
	step: number;
};

type Reset = {
	type: "Reset";
	value: number;
}

type Action = Inc | Dec | Reset;

const inc: (step?: number) => Inc = (step = 1) => ({ type: "Inc", step });
const dec: (step?: number) => Dec = (step = 1) => ({ type: "Dec", step });
const reset: (value?: number) => Reset = (value = 1) => ({ type: "Reset", value });

const reducer = (state: number, action: Action): number => {
	switch (action.type) {
		case "Inc":
			return state + action.step;
		case "Dec":
			return state - action.step;
		case "Reset":
			return action.value;
	}
};

export function CounterReducer() {
	const [count, dispatch] = React.useReducer(reducer, 0);

	return (
		<div>
			<span>{count}</span>
			<button onClick={() => dispatch(inc())}>+</button>
			<button onClick={() => dispatch(dec())}>-</button>
			<button onClick={() => dispatch(reset())}>Reset</button>
		</div>
	)

}
