import React from 'react';
import logo from './logo.svg';
import './App.css';

const TodoList = [
	{ id: 1, task: "abc", complated: true },
	{ id: 2, task: "def", complated: false },
	{ id: 3, task: "ghi", complated: true },
	{ id: 4, task: "jkl", complated: false },
]

function App() {
	return (
		<div>
			<ul>
				{TodoList.map((todo) => (
					<li key={todo.id}>{todo.task} {todo.complated}</li>
				))}
			</ul>
			<Child name="React" />
			<Child name="Next.js" />
			<Child name="Python3" />
		</div>
	);
}

type Props = {
	name: string;
};

function Child(props: Props) {
	return <span>{props.name}</span>;
}

export default App;
