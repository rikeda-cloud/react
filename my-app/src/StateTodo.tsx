import React from "react";
import './StateTodo.css';

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
	const [desc, setDesc] = React.useState(true);

	const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTitle(e.target.value);
	}

	const handleClick = () => {
		setTodo([
			...todo,
			{ id: ++maxId, title, created: new Date(), isDone: false }
		]);
	};

	const handleDone = (e: React.MouseEvent<HTMLButtonElement>) => {
		setTodo(todo.map(item => {
			if (item.id === Number(e.currentTarget.dataset.id)) {
				return {
					...item,
					isDone: true
				};
			} else {
				return item;
			}
		}));
	};

	const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
		setTodo(
			todo.filter(item => item.id !== Number(e.currentTarget.dataset.id))
		);
	}

	const handleSort = (e: React.MouseEvent<HTMLButtonElement>) => {
		const sorted = [...todo];
		sorted.sort((a, b) => {
			if (desc) {
				return b.created.getTime() - a.created.getTime();
			} else {
				return a.created.getTime() - b.created.getTime();
			}
		});
		setDesc(d => !d);
		setTodo(sorted);
	};

	return (
		<div>
			<label>
				TODO:
				<input type="text" name="title"
					value={title} onChange={handleChangeTitle} />
			</label>
			<button type="button" onClick={handleClick}>Add</button><br />
			<button type="button" onClick={handleSort}>
				Sort ({desc ? '^' : 'v'})
			</button>
			<ul>
				{todo.map(item => (
					<li key={item.id} className={item.isDone ? 'done' : ""}>
						{item.title}
						<button type="button" onClick={handleDone} data-id={item.id}>
							Done
						</button>
						<button type="button" onClick={handleDelete} data-id={item.id}>
							Delete
						</button>
					</li>
				))}
			</ul>
		</div>
	)
}
