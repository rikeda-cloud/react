import React from "react";
import { type TodoItemType } from "./App";

type Props = {
	todoItem: TodoItemType;
	children: React.ReactNode;
};

export function TodoItem(props: Props) {
	const onDeleteButton = () => {
		console.log(props.todoItem.task);
	}

	const itemStyle = {
		color: props.todoItem.completed ? "green" : "red",
		fontSize: props.todoItem.completed ? "32px" : "16px",
	};
	return (
		<li key={props.todoItem.id} style={itemStyle}>
			{props.todoItem.task}
			{props.children}
			<button onClick={onDeleteButton}>DELETE</button>
		</li>
	);
}
