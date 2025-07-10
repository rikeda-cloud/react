import React from "react"

export function UnControlForm() {
	const inputRef = React.useRef<HTMLInputElement>(null!);

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		// フォームのデフォルトの送信動作（ページのリロード）を防ぐ
		event.preventDefault();
		// useRefを使ってinput要素の現在の値に直接アクセスし、コンソールに出力
		console.log("非制御コンポーネントの値:", inputRef.current.value);
		// input要素の値を直接クリア
		inputRef.current.value = "";
		// input要素に直接フォーカスを設定
		inputRef.current.focus();
	};

	return (
		<form onSubmit={handleSubmit}>
			<input type="text" ref={inputRef} defaultValue="" placeholder="非制御コンポーネント" />
			<button type="submit">送信 (非制御)</button>
		</form>
	)
}
