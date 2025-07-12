import React from 'react';

export function FormRadio() {
	const [form, setForm] = React.useState({
		os: "windows",
	});

	const handleForm = (e: React.ChangeEvent<HTMLInputElement>) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		})
	}

	const show = () => {
		console.log(`Selected OS: ${form.os}`);
	}

	return (
		<form>
			<fieldset>
				<legend>OS: </legend>
				<label htmlFor="os_win">Windows</label>
				<input id="os_win" name="os" type="radio" value="windows"
					checked={form.os === "windows"} onChange={handleForm} /><br />
				<label htmlFor="os_mac">Mac</label>
				<input id="os_mac" name="os" type="radio" value="mac"
					checked={form.os === "mac"} onChange={handleForm} /><br />
				<label htmlFor="os_linux">Linux</label>
				<input id="os_linux" name="os" type="radio" value="linux"
					checked={form.os === "linux"} onChange={handleForm} /><br />
			</fieldset>
			<button type="button" onClick={show}>Send</button>
		</form>
	)
}
