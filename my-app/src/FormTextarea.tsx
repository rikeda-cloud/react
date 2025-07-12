import React from "react";

export function FormTextarea() {
	const [form, setForm] = React.useState({
		comment: "Form:",
	});

	const handleForm = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		})
	}

	const show = () => {
		console.log(`Comment: ${form.comment}`);
	};

	return (
		<form>
			<label htmlFor="comment">Comment: </label><br />
			<textarea id="comment" name="comment" cols={30} rows={7} value={form.comment} onChange={handleForm}></textarea><br />
			<button type="button" onClick={show}>Send</button>
		</form>
	)
}
