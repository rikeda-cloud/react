import React from "react";

let maxId = 0;

interface Todo {
	id: number;
	title: string;
	created: Date;
	isDone: boolean;
}

export function StateTodo() {
	const [title, setTitle] = React.useState("");
	const [todo, setTodo] = React.useState<Todo[]>([]);

	const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTitle(e.target.value);
	}

	const handleClick = () => {
		setTodo([
			...todo,
			{ id: ++maxId, title, created: new Date(), isDone: false }
		]);
	};

	return (
		<div>
			<label>
				TODO:
				<input type="text" name="title" value={title} onChange={handleChangeTitle} />
			</label>
			<button type="button" onClick={handleClick}>Add</button><br />
			<ul>
				{todo.map(item => (
					<li key={item.id}>{item.title}</li>
				))}
			</ul>
		</div>
	)
}
