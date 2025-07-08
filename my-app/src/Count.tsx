// propsの型定義
interface CountProps {
	count: number;
	setCount: (updater: number | ((prev: number) => number)) => void;
}

export function Count({ count, setCount }: CountProps) {
	// カウントをインクリメントする関数をイベントハンドラーとして定義
	const handleIncrement = () => {
		setCount(prevCount => prevCount + 1);
	};

	return (
		<div>
			<p>現在のカウント: {count}</p>
			{/* ボタンクリックでhandleIncrement関数を呼び出す */}
			<button onClick={handleIncrement}>カウントを増やす</button>
		</div>
	);
}
