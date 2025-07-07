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
	return (
		<li key={props.todoItem.id} style={{ color: props.todoItem.completed ? "green" : "red" }}>
			{props.todoItem.task}
			{props.children}
			<button onClick={onDeleteButton}>DELETE</button>
		</li>
	);
}
