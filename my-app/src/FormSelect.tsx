import React from 'react';

export function FormSelect() {
	const [form, setForm] = React.useState({
		animal: "dog",
	});

	const handleForm = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	};

	const show = () => {
		console.log(`Animal: ${form.animal}`);
	}

	return (
		<form>
			<label htmlFor="animal">Animal: </label>
			<select id="animal" name="animal" value={form.animal} onChange={handleForm}>
				<option value="dog">Dog</option>
				<option value="cat">Cat</option>
				<option value="hamster">Hamster</option>
				<option value="rabbit">Rabbit</option>
			</select>
			<button type="button" onClick={show}>Send</button>
		</form>
	)
}
