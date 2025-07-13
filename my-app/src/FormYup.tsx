import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const checkNgWords = (value: string) => {
	const ngs = ["rikeda", "cloud"];
	for (const ng of ngs) {
		if (value.includes(ng)) {
			return false;
		}
	}
	return true;
}

const schema = yup.object({
	name: yup
		.string()
		.label("Name")
		.required()
		.max(20, "Name must be at most 20 characters long"),
	gender: yup
		.string()
		.label("Gender")
		.required(),
	email: yup
		.string()
		.label("Email")
		.required()
		.email(),
	memo: yup
		.string()
		.label("Memo")
		.required()
		.min(10)
		.test("ng",
			({ label }) => `${label} in Ng Word`,
			value => checkNgWords(value)),
});

export function FormYup() {
	const { register, handleSubmit, formState: { errors } } = useForm({
		defaultValues: {
			name: "",
			email: "",
			gender: "male",
			memo: "",
		},
		resolver: yupResolver(schema),
	});

	const onsubmit = (data: any) => console.log(data);
	const onerror = (err: any) => console.log(err);

	return (
		<form onSubmit={handleSubmit(onsubmit, onerror)} noValidate>
			<div>
				<label htmlFor="name">Name: </label><br />
				<input id="name" type="text"
					{...register("name")} />
				<div>{errors.name?.message}</div>
			</div>
			<div>
				<label htmlFor="gender">Gender: </label><br />
				<label>
					<input type="radio" value="male"
						{...register("gender")} />Man
				</label>
				<label>
					<input type="radio" value="female"
						{...register("gender")} />Woman
				</label>
				<div>{errors.gender?.message}</div>
			</div>
			<div>
				<label htmlFor="email">Email: </label><br />
				<input id="email" type="email"
					{...register("email")} />
				<div>{errors.email?.message}</div>
			</div>
			<div>
				<label htmlFor="memo">Memo: </label><br />
				<textarea id="memo"
					{...register("memo")} />
				<div>{errors.memo?.message}</div>
			</div>
			<div>
				<button type="submit">
					Send
				</button>
			</div>
		</form>
	)

}
