import React from "react";

const colors = [
	{ label: "Red", value: "red" },
	{ label: "Green", value: "green" },
	{ label: "Blue", value: "blue" },
]

export function ColorForm() {
	const [selected, setSelected] = React.useState("");
	const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => setSelected(event.currentTarget.value);

	return (
		<form>
			{colors.map((color) => (
				<label>{color.label}
					<input type="radio" name="color" value={color.value} checked={color.value === selected} onChange={handleChange} />
				</label>
			))}
		</form>
	);
}
