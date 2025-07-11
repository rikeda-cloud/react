interface Props {
	type?: string;
};

export function EventBasic({ type }: Props) {
	const current = () => {
		const d = new Date();

		switch (type) {
			case 'date':
				console.log(d.toLocaleDateString());
				break;
			case 'time':
				console.log(d.toLocaleTimeString());
				break;
			default:
				console.log(d.toLocaleString());
				break;
		}
	};

	const buttonStyle = {
		backgroundColor: '#007bff',
		color: 'white',
		padding: '10px 15px',
		border: 'none',
		borderRadius: '5px',
		cursor: 'pointer',
		fontSize: '16px',
	};

	return (
		<div>
			<button onClick={current} style={buttonStyle}>
				Now Date Generator
			</button>
		</div>
	);
}
