import React from "react";

export function FormFile() {
	const file = React.useRef<HTMLInputElement>(null);

	function show() {
		if (file.current) {
			const fs = file.current.files;
			if (fs) {
				for (let i = 0; i < fs.length; i++) {
					const f = fs[i];
					console.log(`FileName: ${f.name}`);
					console.log(`FileType: ${f.type}`);
					console.log(`FileSize: ${Math.trunc(f.size / 1024)}KB`);
				}
			}
		}
	}

	return (
		<form>
			<input type="file" ref={file} multiple />
			<button type="button" onClick={show}>Send</button>
		</form>
	);
}