import React from "react";

export function FormList() {
	const [form, setForm] = React.useState({
		animal: ["dog", "hamster"],
	});

	const handleFormList = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const data = [];
		const opts = e.target.options;
		for (let i = 0; i < opts.length; i++) {
			if (opts[i].selected) {
				data.push(opts[i].value);
			}
		}
		setForm({
			...form,
			[e.target.name]: data,
		});
	};

	const show = () => {
		console.log(`Animal: ${form.animal.join(", ")}`);
	};

	return (
		<form>
			<label htmlFor="animal">Animal: </label><br />
			<select id="animal" name="animal"
				value={form.animal}
				size={4} multiple={true}
				onChange={handleFormList}>
				<option value="dog">Dog</option>
				<option value="cat">Cat</option>
				<option value="hamster">Hamster</option>
				<option value="rabbit">Rabbit</option>
			</select>
			<button type="button" onClick={show}>Send</button>
		</form>
	);
}
