import React from "react";
import { type TodoItemType } from "./App";

type Props = {
	todoItem: TodoItemType;
	children: React.ReactNode;
};

export function TodoItem(props: Props) {
	return (
		<li key={props.todoItem.id} style={{ color: props.todoItem.completed ? "green" : "red" }}>
			{props.todoItem.task}
			{props.children}
		</li>
	);
}
