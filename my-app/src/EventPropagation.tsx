export function EventPropagation() {
	const handleParent = () => alert("#parent run...");
	const handleMy = () => alert("#my run...");
	const handleChild = () => alert("#child run...");

	// イベント発生源から上位へ伝播
	// return (
	// 	<div onClick={handleParent}>
	// 		<div onClick={handleMy}>
	// 			<button onClick={handleChild}>Child</button>
	// 		</div>
	// 	</div>
	// );

	// イベント発生源から下位へ伝播
	return (
		<div onClickCapture={handleParent}>
			<div onClickCapture={handleMy}>
				<button onClickCapture={handleChild}>Child</button>
			</div>
		</div>
	);
}
