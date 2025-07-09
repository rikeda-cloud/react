import React from "react";

export function Clock() {
	const [date, setDate] = React.useState(new Date());

	const formatter = new Intl.DateTimeFormat("ja-JP", {
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit",
		hour12: false // 24時間表記に変更
	});

	const time = formatter.format(date);
	React.useEffect(() => {
		const timerId = setTimeout(() => {
			setDate(new Date());
		}, 1000);

		return () => {
			clearTimeout(timerId);
		};
	});

	// スタイルオブジェクトを定義します
	const clockContainerStyle: React.CSSProperties = {
		backgroundColor: '#20232a',
		padding: '20px 40px',
		borderRadius: '8px',
		display: 'inline-block',
		boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
		border: '1px solid #61dafb',
		textAlign: 'center'
	};

	const timeStyle: React.CSSProperties = {
		fontFamily: 'monospace', // 等幅フォントで見やすくします
		fontSize: '4rem',
		fontWeight: 'bold',
		color: '#61dafb',
		textShadow: '0 0 8px #61dafb' // 少し光っているようなエフェクト
	};

	return (
		<div style={clockContainerStyle}>
			<span style={timeStyle}>{time}</span>
		</div>
	)
}
