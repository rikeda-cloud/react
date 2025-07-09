import { useState, useEffect, useLayoutEffect, useRef } from 'react';

export function TooltipExample() {
	const [show, setShow] = useState(false);
	const buttonRef = useRef<HTMLButtonElement>(null);
	const tooltipRef = useRef<HTMLDivElement>(null);

	// TRY! useLayoutEffect -> useEffect
	useLayoutEffect(() => {
		if (show && buttonRef.current && tooltipRef.current) {
			const buttonRect = buttonRef.current.getBoundingClientRect();
			const tooltip = tooltipRef.current;

			tooltip.style.left = `${buttonRect.left}px`;
			tooltip.style.top = `${buttonRect.bottom + 5}px`;
		}
	}, [show]); // show（表示状態）が変わるたびに実行

	return (
		<div style={{ padding: '50px' }}>
			<h3>useLayoutEffectの使用例</h3>
			<button ref={buttonRef} onClick={() => setShow(s => !s)}>
				{show ? 'ツールチップを隠す' : 'ツールチップを表示'}
			</button>
			{show && (
				<div ref={tooltipRef} style={{
					position: 'absolute',
					padding: '10px',
					backgroundColor: 'black',
					color: 'white',
					borderRadius: '4px',
					border: '1px solid white',
					zIndex: 100
				}}>
					これがツールチップです！
				</div>
			)}
			<div style={{ marginTop: '80px', textAlign: 'left' }}>
				<h4>なぜここで`useLayoutEffect`を使うのか？</h4>
				<p>
					もしこの処理を<code>useEffect</code>で行うと、以下の現象が起きる可能性があります：<br />
					1. ツールチップがまずデフォルトの位置（この場合、左上など）に一瞬描画される。<br />
					2. その後、<code>useEffect</code>が実行され、計算された正しい位置（ボタンの下）にツールチップが移動する。<br />
					この一連の動きがユーザーの目に「ちらつき」として映ってしまいます。
				</p>
				<p>
					<code>useLayoutEffect</code>は、ブラウザが画面を描画する**前**に位置の計算とスタイルの適用を完了させるため、ユーザーは最初から正しい位置に表示されたツールチップだけを見ることになり、ちらつきが発生しません。
				</p>
			</div>
		</div>
	);
}
