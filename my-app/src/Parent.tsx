import { useRef, forwardRef } from 'react';
import './App.css';

const MyInput = forwardRef<HTMLInputElement>((props, ref) => {
	return (
		<div>
			<p>これは子コンポーネントです</p>
			<input ref={ref} type="text" placeholder="ここに入力..." {...props} />
		</div>
	);
});

export function Parent() {
	const inputRef = useRef<HTMLInputElement>(null);

	const handleClick = () => {
		if (inputRef.current) {
			inputRef.current.focus();
		}
	};

	return (
		<div className="App">
			<header className="App-header">
				<h2>親コンポーネント</h2>
				<MyInput ref={inputRef} />
				<br />
				<button onClick={handleClick}>
					入力欄にフォーカスする
				</button>
			</header>
		</div>
	);
}
