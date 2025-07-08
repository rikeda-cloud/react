import './App.css';
import { TodoItem } from './TodoItem';
import { Count } from './Count';
import { User } from './User';
import { ReadOnlyText, WriteableText } from './Text';
import { ColorForm } from './ColorForm';
import React from "react";

export type TodoItemType = {
	id: number;
	task: string;
	completed: boolean;
};

const TodoList: TodoItemType[] = [
	{ id: 1, task: "abc", completed: true },
	{ id: 2, task: "def", completed: false },
	{ id: 3, task: "ghi", completed: true },
	{ id: 4, task: "jkl", completed: false },
]

function App() {
	const [count, setCount] = React.useState(0);
	return (
		<div>
			<ul>
				{TodoList.map((todo) => (
					<TodoItem key={todo.id} todoItem={todo}>
						<div>This is children プロパティ</div>
					</TodoItem>
				))}
			</ul>
			<Count count={count} setCount={setCount} />
			<User />
			<ReadOnlyText />
			<WriteableText />
			<ColorForm />
		</div>
	);
}

export default App;
