import React, { useState } from "react";

export function ControlForm() {
	const [inputValue, setInputValue] = useState("");

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		// フォームのデフォルトの送信動作（ページのリロード）を防ぐ
		event.preventDefault();
		// stateから現在の入力値を取得し、コンソールに出力
		console.log("制御コンポーネントの値:", inputValue);
		// stateをクリアすることで、入力フィールドの値をクリア
		setInputValue("");
	};

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(event.target.value);
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				value={inputValue}
				onChange={handleChange}
				placeholder="制御コンポーネント"
			/>
			<button type="submit">送信 (制御)</button>
		</form>
	);
}
