import React from 'react';

// propsの型定義
interface CountProps {
	count: number;
	setCount: (updater: number | ((prev: number) => number)) => void;
}

export function Count({ count, setCount }: CountProps) {
	const INTERVAL = 2000;
	const handleIncrement = () => {
		setTimeout(() => { setCount(prevCount => prevCount + 1) }, INTERVAL);
	};
	const handleDecrement = () => {
		setTimeout(() => { setCount(prevCount => prevCount - 1) }, INTERVAL);
	}

	// --- Styles ---
	const containerStyle: React.CSSProperties = {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		padding: '2rem',
		margin: '2rem auto',
		backgroundColor: '#f9f9f9',
		borderRadius: '8px',
		boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
		maxWidth: '320px',
		fontFamily: "system-ui, sans-serif",
	};

	const buttonStyle: React.CSSProperties = {
		fontSize: '1.5rem',
		fontWeight: 'bold',
		color: 'white',
		backgroundColor: '#007bff',
		border: 'none',
		borderRadius: '50%',
		width: '50px',
		height: '50px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		cursor: 'pointer',
		transition: 'background-color 0.2s',
	};

	const decrementButtonStyle: React.CSSProperties = {
		...buttonStyle,
		backgroundColor: '#6c757d',
	};

	const countStyle: React.CSSProperties = {
		fontSize: '2rem',
		fontWeight: 'bold',
		margin: '0 2rem',
		minWidth: '50px',
		textAlign: 'center',
	};
	// --- End Styles ---

	return (
		<div style={containerStyle}>
			<button style={decrementButtonStyle} onClick={handleDecrement}>-</button>
			<span style={countStyle}>{count}</span>
			<button style={buttonStyle} onClick={handleIncrement}>+</button>
		</div>
	);
}
