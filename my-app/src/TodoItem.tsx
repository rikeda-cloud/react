import React from "react";

type TodoItemType = {
	id: number;
	task: string;
	completed: boolean;
};

type Props = {
	todoItem: TodoItemType;
	children: React.ReactNode;
};

export function TodoItem(props: Props) {
	const onDeleteButton = () => {
		console.log(props.todoItem.task);
	}

	// --- Styles ---
	const liStyle: React.CSSProperties = {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		padding: '1rem',
		margin: '0.5rem 0',
		backgroundColor: '#ffffff',
		border: '1px solid #e0e0e0',
		borderRadius: '8px',
		boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
		listStyleType: 'none',
		transition: 'box-shadow 0.2s',
	};

	const taskStyle: React.CSSProperties = {
		fontSize: '1.1rem',
		color: '#333',
		textDecoration: props.todoItem.completed ? 'line-through' : 'none',
		opacity: props.todoItem.completed ? 0.5 : 1,
	};

	const contentWrapperStyle: React.CSSProperties = {
		display: 'flex',
		alignItems: 'center',
		gap: '1rem',
	};

	const deleteButtonStyle: React.CSSProperties = {
		padding: '0.5rem 1rem',
		fontSize: '0.875rem',
		color: '#fff',
		backgroundColor: '#dc3545',
		border: 'none',
		borderRadius: '4px',
		cursor: 'pointer',
		transition: 'background-color 0.2s',
	};
	// --- End Styles ---

	return (
		<li style={liStyle}>
			<div style={contentWrapperStyle}>
				<span style={taskStyle}>{props.todoItem.task}</span>
				{props.children}
			</div>
			<button style={deleteButtonStyle} onClick={onDeleteButton}>DELETE</button>
		</li>
	);
}
