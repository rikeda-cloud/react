import './App.css';
import { TodoItem } from './TodoItem';

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
	return (
		<div>
			<ul>
				{TodoList.map((todo) => (
					<TodoItem todoItem={todo} />
				))}
			</ul>
		</div>
	);
}

export default App;
